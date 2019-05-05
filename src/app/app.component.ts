import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  users:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public restProvider: RestService
  ) {
    this.initializeApp();
  }

  getUpdate(){
    this.restProvider.getUsers()
    .then(data => {
        this.users = data['total'];
        console.log(this.users);
        console.log(data['total']);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
