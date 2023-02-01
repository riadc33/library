import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';
import { LibraryService } from '../services/library.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage implements OnInit {
  books: any;
  constructor(
    private libraryService: LibraryService,
    private modalController: ModalController,
    private navCtrl: NavController,

    ) { }

  ngOnInit() {
    this.libraryService.getBooks().then(books => {
      this.books = books;
    })
  }
  back(){
    this.navCtrl.navigateForward('menu/home');
  }
  async showBook(book: any){
    const modal = await this.modalController.create({
      component: BookDetailModalPage,
      componentProps: {
        book: book
      }
    });
    return await modal.present();
  }

}
