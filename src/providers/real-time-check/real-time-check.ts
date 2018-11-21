import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { RealTimeItems } from '../../models/realtimeItems';
import { reorderArray } from 'ionic-angular';


/*
  Generated class for the RealTimeCheckProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RealTimeCheckProvider {

  projects: any[] = [];
  projectActive = false;
  timerInterval: any;
  secondsElapsed: number = 0;

  constructor(public storage: Storage) {

  }

  load(id?): void {
    //스토리지로부터 배열 가져와서 배열에 다시 저장 후 마지막 레코드가 기록 중이였던거면, 다시 해당 레코드(마지막 레코드)에 기록 재개

    this.storage.get('testDriveRecords'+id||null).then((projects) => {

      if(projects){
        console.log("project 스토리지로 부터 가져옴, projects있음.")

        for(let project of projects){

          let savedProject/* = new RealTimeItems(project.vehicleId, new Date(project.lastChecked), project.totalSeconds, project.active, project.id, project.vehicleDrivingStatusEnum, project.currentLatitude, project.currentLongitude);*/
          this.projects.push(savedProject);


          console.log("savedProject: ",savedProject)

        }
        if(projects[projects.length-1].active){ //이미 이전 레코드가 있는 데, 활성 상태라면, 마지막 레코드만 재개.
          this.startTiming(this.projects[this.projects.length], true, id);
        }

      }

    });

    this.storage.get('permatimerTime').then((time) => {
      this.secondsElapsed = time;
    });

  }

  save(id?): void {
    this.storage.set('testDriveRecords'+id||null, this.projects);
    this.storage.set('permatimerTime', this.secondsElapsed);
  }


  startTiming(project, restarting, id): void {

    this.projectActive = true;

    if(!restarting){
      project.setIsActive(true);
      project.setLastChecked(new Date());
    }

    this.timerInterval = setInterval(() => {

      let now = new Date();
      let timeDifference = now.getTime() - project.lastChecked.getTime();
      let seconds = timeDifference / 1000;

      this.secondsElapsed += seconds;
      project.addToTotalSeconds(seconds);

      project.setLastChecked(now);
      this.save(id);

    }, 1000);
  }

  stopTiming(project, id): number {

    let totalTimeElapsed = this.secondsElapsed;

    this.projectActive = false;

    project.setIsActive(false);
    clearInterval(this.timerInterval);
    this.timerInterval = false;
    this.secondsElapsed = 0;
    this.save(id);

    return totalTimeElapsed;

  }

  increaseSeconds(project, amount, id): void {
    project.addToTotalSeconds(amount);
    this.save(id);
  }

  decreaseSeconds(project, amount, id): void {
    project.deductFromTotalSeconds(amount);
    this.save(id);
  }

  addProject(project, id?): void {

    this.projects.push(project);
    this.save();

  }

  editProject(project, title, id): void {

    project.setName(title);
    this.save(id);

  }

  removeProject(project, id): void {

    let index = this.projects.indexOf(project);

    if(index > -1){
      this.projects.splice(index, 1);
      this.save(id);
    }

  }
}
