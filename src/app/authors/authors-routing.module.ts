import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthorsPage } from './authors.page';

const routes: Routes = [
  {
    path: '',
    component: AuthorsPage,
    children: [
      {
        path: "home",
        loadChildren: () => import('../book-detail-modal/book-detail-modal.module').then( m => m.BookDetailModalPageModule)
      },
     
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorsPageRoutingModule {}
