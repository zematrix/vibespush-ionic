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
      this.displayCordovaError();
    }else{
      this.inCordova = true;
      vibes.configure(function(){
        console.log("SDK Initialized Sucessfully");
      },
      function(error){
        console.log("Error initializing SDK");
        console.log(error);
      });
    }
  }

  login(){
    if(this.inCordova ===false){
      this.displayCordovaError();
      return;
    }
    var msg = null;
      vibes.registerDevice(function(credentials){
        let deviceId = credentials.device_id;
        let authToken=credentials.auth_token;
        msg='Device id is ['+deviceId+'] and authToke is['+authToken+']';
        console.log(msg);
      },function(errorMsg){
        msg = errorMsg;
        console.log(msg);
      });
    
  }

  test(){
    if(this.inCordova ===false){
      this.displayCordovaError();
      return;
    }
    var msg = null;
    console.log("calling unregisterDevice");
    vibes.unregisterDevice(function(){
    },function(errorMsg){
      msg = errorMsg;
      console.log(msg);
    });

    console.log("calling registerPush");
    vibes.registerPush("abcd",function(){
      console.log(msg);
    },function(errorMsg){
      msg = errorMsg;
      console.log(msg);
    });
    
    console.log("calling unregisterPush");
    vibes.unregisterPush(function(){
    },function(errorMsg){
      msg = errorMsg;
      console.log(msg);
    });

    console.log("calling associatePerson");
    vibes.associatePerson("person1",function(){
    },function(errorMsg){
      msg = errorMsg;
      console.log(msg);
    });
  }


  private displayCordovaError(){
    let msg = 'Cordova is not available - Run in physical device';
      console.error(msg);
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000
      });
      toast.present();
      return;
  }

  private display(msg){
      console.error(msg);
      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000
      });
      toast.present();
      return;
  }
}
