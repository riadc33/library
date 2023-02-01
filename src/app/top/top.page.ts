import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {
  top:any
  constructor(
    private libraryService: LibraryService,
    private navCtrl: NavController,


  ) { }

  ngOnInit() {
    this.libraryService.getTopBooks().then( res => {
      this.top = res.slice(0,10).map((item: any, index: any) => {
        return { ...item, position: index + 1 }
      });

      
    })
  }
  back(){
    this.navCtrl.navigateForward('menu/home');
  }
}
