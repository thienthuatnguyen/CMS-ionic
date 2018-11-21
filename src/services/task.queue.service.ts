import { Injectable } from "@angular/core";

export const RETRY_TIMEOUT = 3000;
@Injectable()
export class TaskQueueService {
    // private queues: Array<TaskQueue> = [];
    // private queueIDs: Array<string> = [];

    constructor(
    ) {

    }
    /**
     * 
     * @param id 
     * @param opts 
     */
    createQueue(id: string, opts: TaskQueueOptions) {
        const queue = new TaskQueue(id);
        queue.runWhen(opts);
        // this.queues.push(queue);
        // this.queueIDs.push(id);
        return queue;
    }
    // findQueue(id: string) {
    //     return this.queues.find(_q => _q.getId() === id);
    // }

    // private snapshot() {
    //     localStorage.setItem('TaskQueueService', JSON.stringify(this.queueIDs));
    // }

    // private restore() {
    //     let queueIDs = localStorage.getItem('TaskQueueService');
    //     if (queueIDs) {
    //         this.queueIDs = JSON.parse(queueIDs) as Array<string>;
    //         this.queueIDs.forEach(
    //             _id => {
    //                 let queues = localStorage.getItem(TaskQueue.PERSIS_KEY + _id);

    //             }
    //         )
    //     }

    // }
}




export class TaskQueue {
    static PERSIS_KEY = 'TaskQueue_';
    private id: string;
    private queue: Array<Task> = [];
    private options: TaskQueueOptions;
    private running = false;
    private taskRunnerContainer: (task: Task) => Promise<boolean>;
    private timeout = null;

    constructor(id: string) {
        this.id = id;
    }

    getId() {
        return this.id;
    }
    length(): number {
        return this.queue.length;
    }
    /**
     * Invoke this function after configuring TaskQueue by using @runWhen() method
     * @param task 
     */
    add(task: Task) {
        console.log('[TaskQueue] add task');
        this.queue.push(task);
        this.runNextTask();
    }
    /**
     * This method should run at first to configure strategy of running
     * @param options 
     */
    runWhen(options: TaskQueueOptions) {
        this.options = options;
    }
    runTaskInContainer(fn: (task: Task) => Promise<boolean>) {
        this.taskRunnerContainer = fn;
    }
    /**
     * Invoke this function after configuring TaskQueue by using @runWhen() method
     */
    execute() {
        this.runNextTask();
    }
    /**
     * Helpful when app is resumed from background mode. We don't which point the queue was stoped before background
     */
    forceExecute() {
        this.running = false;
        this.runNextTask();
    }

    stop(fn: () => void): void {
        if (this.queue.length == 0) {
            console.log('[TaskQueue] stopped');
            // stop
        } else {
            setTimeout(() => {
                // try stopping again
                this.runNextTask();
                this.stop(fn);
            }, 3000);
        }
    }

    private async runNextTask() {
        console.log('[runNextTask] queue length = ', this.queue.length);
        console.log('[runNextTask] running = ', this.running);
        if (this.queue.length == 0) {
            this.running = false;
            return;
        }
        if (this.running) return;
        // start task
        this.running = true;
        let firsTask = this.queue[0];
        let runSuccess = false;
        // if (this.taskRunnerContainer) {
        //     console.log('[TaskQueue] running in task container');
        //     runSuccess = await this.taskRunnerContainer(firsTask);
        // } else {
        console.log('[TaskQueue] running task');
        runSuccess = await firsTask.execute();
        // }
        this.running = false;
        if (runSuccess) {
            this.queue.shift();
            this.runNextTask();
        } else {
            // fail, retry after timeout
            if (this.timeout) {
                clearTimeout(this.timeout);
            }
            this.timeout = setTimeout(
                () => {
                    this.runNextTask();
                },
                this.options.retryTimeout
            )
        }
    }
    private snapshot() {
        localStorage.setItem(TaskQueue.PERSIS_KEY + this.id, JSON.stringify(this.queue));
    }
    private restoreSnapshot() {

    }
}

export class Task {
    constructor(private fn: () => Promise<boolean>) {

    }
    execute(): Promise<boolean> {
        return this.fn();
    }
}

/**
 * @interval or @queueSize is required
 */
export interface TaskQueueOptions {
    retryTimeout?: number;
    queueSize?: number;
}

