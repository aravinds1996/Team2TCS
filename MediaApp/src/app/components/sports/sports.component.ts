import { Component, OnInit } from '@angular/core';
import { SportsService } from 'src/app/services/sports.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit {

  sportsNews: any[]=[];
  euroCup: any[]=[];
  constructor(private sportsService: SportsService) { }

  async ngOnInit(): Promise<void> {
    this.euroCup= [
      {
        "rank": "1",
        "countryName": "Belgium",
        "played": "6",
        "won":"6",
        "lost": "0",
        "points":"10",
        "countryImage": "https://image.flaticon.com/icons/png/32/197/197583.png"
      },
      {
        "rank": "2",
        "countryName": "Denmark",
        "played": "6",
        "won":"5",
        "lost": "1",
        "points":"8",
        "countryImage": "https://image.flaticon.com/icons/png/32/197/197565.png"
      },
      {
        "rank": "3",
        "countryName": "England",
        "played": "6",
        "won":"4",
        "lost": "2",
        "points":"6",
        "countryImage": "https://image.flaticon.com/icons/png/32/197/197485.png"
      },
      {
        "rank": "4",
        "countryName": "Spain",
        "played": "6",
        "won":"3",
        "lost": "3",
        "points":"4",
        "countryImage": "https://image.flaticon.com/icons/png/32/197/197571.png"
      },
      {
        "rank": "5",
        "countryName": "Switzerland",
        "played": "6",
        "won":"2",
        "lost": "4",
        "points":"2",
        "countryImage": "https://image.flaticon.com/icons/png/32/197/197540.png"

      }
    ]
    console.log(this.euroCup)

    this.sportsService.getSportsNews().subscribe((response: any) => {
      console.log("Sports API Response ", response)
      response.articles.forEach((elem : any) => {
        if(elem.urlToImage != null)
        this.sportsNews.push(elem)
      });
    console.log("Checking aray:", this.sportsNews)
    });
  }

}
