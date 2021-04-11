import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
favLinks:string[]=["https://education.launchcode.org/","https://www.bing.com/search/"]
funImage:string='https://media4.giphy.com/media/LmNwrBhejkK9EFP504/200.gif';
  constructor() { }

  ngOnInit() {
  }

}
