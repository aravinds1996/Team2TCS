import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddNewsComponent implements OnInit {

  title: string = ''
  description: string = ''
  url: string = ''
  urlToImage: string = ''
  publishedAt: string = ''
  username = '';
  email = '';

  constructor(private newsService: NewsService, private myService:AuthenticationService,
    private _router: Router) { 
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

  ngOnInit(): void {
  }

  handleSubmit() {
    const data = {
      title: this.title,
      description: this.description,
      url: this.url,
      urlToImage: this.urlToImage,
      publishedAt: this.publishedAt
    }

    this.newsService.addNews(data)
      .subscribe(() => {
        console.log('Task Added!')
        this.title = ''
        this.description = ''
        this.url = ''
        this.urlToImage = ''
        this.publishedAt = ''
      })
  }
}
