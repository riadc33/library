import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-books-modal',
  templateUrl: './books-modal.page.html',
  styleUrls: ['./books-modal.page.scss'],
})
export class BooksModalPage implements OnInit {

  author: any;

  constructor( 
    private navParams: NavParams,
    private modalController: ModalController,
    private libraryService: LibraryService,
    ) { }


    
  ngOnInit() {
    const author=this.navParams.get("author");

    this.libraryService.getBooksAuthor(author.id).then( res => {
      this.author = res;
    })

  }

  ionViewDidEnter() {
    this.author = this.navParams.get("author");
  }

  closeModal(){
    this.modalController.dismiss();
  }
}
