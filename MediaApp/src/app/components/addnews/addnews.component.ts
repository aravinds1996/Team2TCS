import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NewsService } from 'src/app/services/news.service';



@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddNewsComponent implements OnInit {

  addNewsForm! : FormGroup ;
  submitted = false ;
  username: string;
  email: string;
  message: string;

  constructor(private newsService: NewsService, private myService:AuthenticationService,
    private _router: Router,
    private formBuilder : FormBuilder) { 
      this.myService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
      error => this._router.navigate(['/main/login'])
    )
    console.log(this.username);
    this.myService.getEmail()
    .subscribe(
      data => this.email= data.toString(),
      error => this._router.navigate(['/main/login'])
    )
    console.log(this.email);
    }

  ngOnInit() {
    this.addNewsForm = this.formBuilder.group(
      {
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        url: ['', [Validators.required]],
        urlToImage:['', [Validators.required]],
        publishedAt :['', [Validators.required]]
      }
   
    )
  }

  get fval() { 
    return this.addNewsForm.controls; 
  }

  addNews() {
    this.submitted=true;
    if(this.addNewsForm.valid){
      this.newsService.addNews(this.addNewsForm.value)
      .subscribe(
        data => this.message = "News Added",
        error => this.message = "Failed to add news",
        
      );
      alert("News Added!");
      window.location.reload();
    }
    else{
      return;
    }
  }
}
