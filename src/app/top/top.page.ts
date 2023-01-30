import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../services/library.service';

@Component({
  selector: 'app-top',
  templateUrl: './top.page.html',
  styleUrls: ['./top.page.scss'],
})
export class TopPage implements OnInit {
  top:any
  constructor(
    private libraryService: LibraryService,

  ) { }

  ngOnInit() {
    this.libraryService.getTopBooks().then( res => {
      this.top = res.slice(0,10);
      console.log('res',res);
      
    })
  }

}
