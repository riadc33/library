import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';

import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {
  constructor(private storage: Storage,private navCtrl: NavController){
    this.storage.create();

  }

 async canActivate(){
   const isIntro = await this.storage.get('intro',);
   console.log('isIntro',isIntro);
   
    if(isIntro){
      return true
    }else{
      this.navCtrl.navigateForward('/intro');
      return false;
    }

  }
  
}
