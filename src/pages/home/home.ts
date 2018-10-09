import { Component } from '@angular/core';
import { NavController, ToastController, Platform } from 'ionic-angular';

let vibes =  require('../vibes');
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string = 'joe@example.com';
  password: string = "password";
  inCordova: boolean = false;
  
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public platform: Platform) {
    
  }

  ionViewDidLoad(){
    if (!this.platform.is('cordova')) {
      this.displayError();
    }else{
      this.inCordova = true;
      vibes.configure();
    }
  }

  login(){
    if(this.inCordova ===false){
      this.displayError();
      return;
    }
    vibes.configure();
    vibes.registerDevice();
    let toast = this.toastCtrl.create({
      message: 'User logged in',
      duration: 3000
    });
    toast.present();
  }


  private displayError(){
    let msg = 'Cordova is not available - Run in physical device';
      console.error(msg);
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000
      });
      toast.present();
      return;
  }
}
