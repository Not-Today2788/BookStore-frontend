import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatTabsModule} from '@angular/material/tabs';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { BookComponent } from './Components/book/book.component';
import { SortComponent } from './Components/sort/sort.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { CartComponent } from './Components/cart/cart.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { PersonalDetailsComponent } from './Components/personal-details/personal-details.component';
import { OrderPlacedComponent } from './Components/order-placed/order-placed.component';
import { MatTableModule } from '@angular/material/table';
import { ViewBookComponent } from './Components/view-book/view-book.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotpasswordComponent,
    DashboardComponent,
    BookComponent,
    SortComponent,
    CartComponent,
    PersonalDetailsComponent,
    OrderPlacedComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatExpansionModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
