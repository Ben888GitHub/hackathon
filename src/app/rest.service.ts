import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = 'https://forfitbit.herokuapp.com/get-results';
  constructor(public http: HttpClient) {
    console.log('Hello RestServiceProvider Provider');
  }
  getUsers() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => {
        resolve(data['summary']);
        console.log(data['summary']);
      }, err => {
        console.log(err);
      });
    });
  }
}
