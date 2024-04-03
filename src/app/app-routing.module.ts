import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BookComponent } from './Components/book/book.component';
import { SortComponent } from './Components/sort/sort.component';
import { CartComponent } from './Components/cart/cart.component';
import { PersonalDetailsComponent } from './Components/personal-details/personal-details.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { ViewBookComponent } from './Components/view-book/view-book.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'forgot', component: ForgotpasswordComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'book', component:BookComponent},
  {path:'sort', component: SortComponent},
  {path:'cart',component: CartComponent},
  {path:'personal', component: PersonalDetailsComponent},
  {path:'orderplaced', component: OrderPlacedComponent},
  {path:'viewbook', component: ViewBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
