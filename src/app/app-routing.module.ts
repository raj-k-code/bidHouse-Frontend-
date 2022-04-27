import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeContentComponent } from './home-content/home-content.component';
import { ProductByCategoryComponent } from './product-by-category/product-by-category.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: "", component: HomeContentComponent },
  { path: "product-by-category", component: ProductByCategoryComponent },
  {
    path: "sign-in", component: SigninComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
