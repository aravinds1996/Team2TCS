import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddNewsComponent } from './components/addnews/addnews.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { EditnewsComponent } from './components/editnews/editnews.component';
import { ErrorComponent } from './components/error/error.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';
import { MainDeskComponent } from './components/main-desk/main-desk.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewslistComponent } from './components/newslist/newslist.component';
import { RegisterComponent } from './components/register/register.component';
import { SportsComponent } from './components/sports/sports.component';

const routes: Routes = [
  {
    path:"",
    redirectTo:"/home",
    pathMatch:"full"
  },
  { 
    path :'aboutUs',
   component: AboutUsComponent
  },
  { 
    path :'contactUs',
     component: ContactUsComponent
  },
  { 
    path :'home',
     component: HomePageComponent
  },
  { 
    path :'sports', 
    component: SportsComponent
  },
  { 
    path :'addNews', 
    component: AddNewsComponent
  },
  { 
    path :'navbar', 
    component: NavbarComponent
  },
  { 
    path :'editNews/:id', 
    component: EditnewsComponent
  },
  { 
    path :'newsList', 
    component: NewslistComponent
  },
  {
    path: 'main', component: MainDeskComponent, children:
      [
        {path: '', redirectTo: 'login', pathMatch: 'full'},
        { path: 'login', component: LoginComponent },
        { path: 'register', component: RegisterComponent }
      ]
  },
  {
    path:"**",
    component:ErrorComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
