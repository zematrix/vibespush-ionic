import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

declare var vibes: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username: string='joe@example.com';
  password: string="password";
  
  constructor(public navCtrl: NavController,public toastCtrl: ToastController) {
    vibes.configure();
  }

  login(){
    vibes.registerDevice();
    let toast = this.toastCtrl.create({
      message: 'User logged in',
      duration: 3000
    });
    toast.present();
  }
}
