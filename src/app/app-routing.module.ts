import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'home',
    component: AppComponent,
  },
  {
    path: 'viewProducts',
    component: ViewProductComponent
  },
];

@NgModule({
  imports: [ HttpClientModule,
             RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
