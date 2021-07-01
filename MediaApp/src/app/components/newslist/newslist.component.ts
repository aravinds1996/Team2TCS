import { HttpClient } from '@angular/common/http';
import { OnDestroy } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs';
import { News } from 'src/app/models/news';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NewsService } from 'src/app/services/news.service';

class DataTablesResponse {
  data: any[];
  draw: number;
  recordsFiltered: number;
  recordsTotal: number;
}

@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit, OnDestroy {

  dtOptions: DataTables.Settings = {};
  news: News[] = []
  @Input()
  oneNews!: News;
  once =0;
  dtTrigger: Subject<any> = new Subject<any>();
  username = '';
  email = '';

  constructor(private myService:AuthenticationService,private newsService: NewsService, private router: Router,private http: HttpClient) { }

  ngOnInit(): void {
    this.myService.getUserName()
    .subscribe(
      data => this.username= data.toString(),
      error => this.router.navigate(['/main/login'])
    )
    console.log(this.username);
    this.myService.getEmail()
    .subscribe(
      data => this.email= data.toString(),
      error => this.router.navigate(['/main/login'])
    )
    const that = this;
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
    };
    this.getNews();
  
  
    // if(this.once=0)
    // {
    //   this.router.navigate(['/newsList']);
    //   this.once++;
    // }
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
  
  
  
 
  getNews() {
    this.newsService.getNews().subscribe((data) => {
      console.log(data);
      this.news = data 
      this.dtTrigger.next();

    })
  }

  handleDelete(id: any) {
    if(confirm("Are you sure you want to delete this?"))
    {
      this.newsService.removeNews(id)
      .subscribe(
        () => 
        {
          console.log('News Deleted');
          window.location.reload();
        },
        err => console.log(err)
      )
  }
  else{
  }
}

}
