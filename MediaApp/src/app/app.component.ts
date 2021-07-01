import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MediaApp';
  navBarFlag : any;
  chatFlag: boolean = false;

  ngOnInit(){

  }

  openChat(){
    this.chatFlag = !this.chatFlag
  }
}
