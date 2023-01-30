import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-modal-detail-autors',
  templateUrl: './modal-detail-autors.page.html',
  styleUrls: ['./modal-detail-autors.page.scss'],
})
export class ModalDetailAutorsPage implements OnInit {
  data: any;

  constructor(
    private navParams: NavParams,

  ) { }

  ngOnInit() {
    this.data = this.navParams.get("author");
    console.log("pito flauta", this.data);

  }
}
