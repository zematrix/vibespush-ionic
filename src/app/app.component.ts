import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Push, PushObject, PushOptions} from "@ionic-native/push";
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(public platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    public push: Push,) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.setupPush();
    });
  }

  setupPush(){
    if (!this.platform.is('cordova')) {
      console.warn('Chat not initialized. Cordova is not available - Run in physical device');
      return;
    }
    const options: PushOptions = {
      android: {
        senderID: '648609754222',
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      },
      windows: {}
    };

    const pushObject: PushObject = this.push.init(options);

    pushObject.on('notification').subscribe((notification: any) => {
    });

    pushObject.on('registration').subscribe((registration: any) => {
      window.localStorage.setItem('pushToken',registration.registrationId);
    });
  }
}

