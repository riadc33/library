import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { ModalDetailAutorsPage } from '../modal-detail-autors/modal-detail-autors.page';


@Component({
  selector: 'app-authors',
  templateUrl: './authors.page.html',
  styleUrls: ['./authors.page.scss'],
})
export class AuthorsPage implements OnInit {

  authors: any;

  constructor(
    private modalController: ModalController,
    private libraryService: LibraryService,
    ) { }

  ngOnInit() {
    this.libraryService.getAuthors().then( res => {
      this.authors = res;

    })
  }
  async goToDetail(author:any) {
    const modal = await this.modalController.create({
      component: ModalDetailAutorsPage,
      componentProps: {
        author: author
      }
    });
    return await modal.present();
  }
 

}
