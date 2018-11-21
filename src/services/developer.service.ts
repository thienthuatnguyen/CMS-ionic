import { Injectable } from "@angular/core";
@Injectable()
export class DeveloperService {
    array: any = [];
    constructor() {
        // this.addLog();
    }
    addLog() {
        // let windowConsole = window.console;
        let windowLog = window.console.log;
        window.console.log = (text?: any, value?: any) => {
            if (text && !value) {
                windowLog(text);
                this.array.push(text);
            }
            if (value && !text) {
                windowLog(value);
                this.array.push(value);
            }
            if (text && value) {
                windowLog(text, value);
                this.array.push(text, value);
            }
            // this.array.push(windowConsole.info);
        }
        let windowError = window.console.error;
        window.console.error = (text?: any, value?: any) => {
            if (text && !value) {
                windowError(text);
                this.array.push(text);
            }
            if (value && !text) {
                windowError(value);
                this.array.push(value);
            }
            if (text && value) {
                windowError(text, value);
                this.array.push(text, value);
            }
        }


    }
}

