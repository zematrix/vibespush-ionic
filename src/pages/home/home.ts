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
  appId:string ='edd37b43-9023-4db3-8f66-4a3f335afc30';
  appUrl: string = 'https://public-api-uat.vibescm.com/mobile_apps';
  token: string = "token";
  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public platform: Platform) {
    
  }

  ionViewDidLoad(){
    if (!this.platform.is('cordova')) {
      this.displayCordovaError();
    }else{
      this.inCordova = true;
      let tk = window.localStorage.getItem('pushToken');
      console.log(tk);
      if(tk){
        this.token  = tk;
      }
      vibes.configure(this.appId,this.appUrl,
      function(){
        console.log("SDK Initialized Sucessfully");
      },
      function(error){
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
        let json = JSON.parse(credentials);
        let deviceId = json.device_id;
        let authToken = json.auth_token;
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

    console.log("calling associatePerson");
    vibes.associatePerson("person1",function(){
    },function(errorMsg){
      msg = errorMsg;
      console.log(msg);
    });

    

    console.log("calling registerPush");
    vibes.registerPush(this.token,function(){
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

    console.log("calling unregisterDevice");
    vibes.unregisterDevice(function(){
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

  onFunctionCompleted = (_params) => {
    return new Promise((resolve, reject) => {
      let msg = _params.msg;
      this.display(msg);
      resolve();
    });
  }
}
