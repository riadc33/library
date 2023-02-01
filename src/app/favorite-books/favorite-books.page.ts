import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';
import { ModalController,NavController } from '@ionic/angular';
import { BookDetailModalPage } from '../book-detail-modal/book-detail-modal.page';


@Component({
  selector: 'app-favorite-books',
  templateUrl: './favorite-books.page.html',
  styleUrls: ['./favorite-books.page.scss'],
})
export class FavoriteBooksPage implements OnInit {

  my_favorite_books: any; 

  constructor(
    private modalController: ModalController,
    private libraryService: LibraryService,
    private storage: Storage,
    private alertController: AlertController,
    private navCtrl: NavController,

    ) { }

  async ngOnInit() {
    const user_id = await this.storage.get("user_id");
    this.libraryService.getMyFavoriteBooks(user_id).subscribe((data:any) =>{
      this.my_favorite_books = data
    },
    (error) => 
      this.presentAlert("Opps", "hubo un error", error)
    )
  }
  back(){
    this.navCtrl.navigateForward('menu/home');
  }
  async presentAlert(header: any, subHeader: any, message: any) {
    const alert = await this.alertController.create(
      {
        header: header,
        subHeader: subHeader,
        message: message,
        buttons: ['Ok']
      }
    );
    await alert.present();
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
