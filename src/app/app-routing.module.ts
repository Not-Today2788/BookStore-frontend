import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BookComponent } from './Components/book/book.component';
import { SortComponent } from './Components/sort/sort.component';

const routes: Routes = [
  {path:'login',component: LoginComponent},
  {path:'forgot', component: ForgotpasswordComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'book', component:BookComponent},
  {path:'sort', component: SortComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
