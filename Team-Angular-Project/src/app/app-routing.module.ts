import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductComponent } from './product/product.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'homep',component:HomeComponentComponent},
  {path:'home',component:HomePageComponent},
  {path:'products',component:ProductComponent},
  {path:'register',component:RegisterComponent},
  {path:'cart',component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ HomeComponentComponent,HomePageComponent, ProductComponent, RegisterComponent, CartComponent ]