import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NewsService } from 'src/app/services/news.service';
import { SportsService } from 'src/app/services/sports.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  providers: [NgbCarouselConfig],
  // styles: [` .img-fluid{ min-width:100%}`]

})
export class HomePageComponent implements OnInit {
  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images: any[]=[];
  cityName: string='';
  desc: string='';
  temp: Number =0;
  windSpeed :Number =0;
  precipitation :Number=0;
  oxy :Number=0;
  currentTime: any;
  newsDetails: any[]=[];
  
  constructor(config: NgbCarouselConfig, 
    private weatherService: WeatherService,
     private newsService: NewsService) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;
    
  }
  async ngOnInit(): Promise<void> {
    
    const request = await fetch("https://ipinfo.io/json?token=7dd06802688a7e")
    const json = await request.json()
    this.cityName = json.city;
    this.weatherService.getWeatherDetails(this.cityName).subscribe((response : any) => {
      console.log("Api response is: ", JSON.stringify(response), (response))
        this.temp = response.main.temp;
        this.desc = response.weather[0].description;
        this.windSpeed=40;
        this.precipitation=84;
        this.oxy=0.2;
        this.currentTime = new Date();
    });

    this.newsService.getNews().subscribe((response) => {
      // console.log("News Response from db:", response)
      if(response.length >0){
        response.forEach((elem) => {
          this.newsDetails.push(elem);
          this.images.push(elem.urlToImage);
        })
        console.log("Response News Array", this.newsDetails)
        this.newsDetails.forEach((item, i) => {
          item.lastUpdate = i + 5;
        });
      }
    })


  }

}
