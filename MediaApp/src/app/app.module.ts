import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomenavbarComponent } from './components/homenavbar/homenavbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SportsComponent } from './components/sports/sports.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddNewsComponent } from './components/addnews/addnews.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { AdminnavbarComponent } from './components/adminnavbar/adminnavbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ChatComponent } from './components/chat/chat.component';
import { EditnewsComponent } from './components/editnews/editnews.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { AuthenticationService } from './services/authentication.service';
import { LoginComponent } from './components/login/login.component';
import { MainDeskComponent } from './components/main-desk/main-desk.component';
import { ConfirmEqualValidatorDirective } from '../app/components/register/confirm-equal-validator.directive';
import { DataTablesModule } from "angular-datatables";
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    ConfirmEqualValidatorDirective,
    HomenavbarComponent,
    FooterComponent,
    SportsComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomePageComponent,
    AddNewsComponent,
    NewslistComponent,
    AdminnavbarComponent,
    LoginComponent,
    RegisterComponent,
    ChatComponent,
    EditnewsComponent,
    NavbarComponent,
    MainDeskComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule,
    DataTablesModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
