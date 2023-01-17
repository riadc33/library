import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  constructor(private navCtrl: NavController, storage: Storage){

  }

  goToPagina2(){
    this.navCtrl.navigateForward('/intro');
  }

  

  
 
}