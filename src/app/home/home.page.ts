import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  users: any;
  constructor(public restProvider: RestService) {
    //while(true){
        this.getUsers();
    //}
  }
  getUpdate(){
    this.restProvider.getUsers()
    .then(data => {
        this.users = data['total'];
        console.log(this.users);
        console.log(data['total']);
    });
  }
  getUsers() {
    this.restProvider.getUsers()
    .then(data => {
      
        this.users = data['total'];
        console.log(this.users);
        console.log(data['total']);
      
    });
  }
}
