import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  caloriesOut: any;
  speed: any; //steps per km
  distanceTotal :any;
  step: any;
  constructor(public restProvider: RestService) {
        this.getCaloriesOut();
        this.getSteps();
        this.getSpeed();
  }
  getUpdate(){
    this.restProvider.getUsers()
    .then(data => {
        this.caloriesOut = data['caloriesOut'];
    });
  }
  getSteps(){
    this.restProvider.getUsers()
    .then(data => {
        this.step = data['steps'];
    });
  }
  getSpeed(){
    this.restProvider.getUsers()
    .then(data => {
        var distance = data['sedentaryMinutes'];
        var steps = data['steps'];
        this.speed = (steps/distance).toFixed(2);
    });
  }
  getCaloriesOut() {
    this.restProvider.getUsers()
    .then(data => {
        this.caloriesOut = data['caloriesOut'];
    });
  }
}
