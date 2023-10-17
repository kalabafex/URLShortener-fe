import { Component } from '@angular/core';
import { ShortenerService } from '../app/shortener.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe';
  url:string="";
  shortenedURL$="";
  constructor(private shortenerService:ShortenerService) {}
  onShorten(){
   this.shortenerService.getShortenedURL(this.url);
  }
  copy(){

  }
}
