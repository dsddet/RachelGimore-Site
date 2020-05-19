import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links:String[];
  showElement:boolean;


  constructor() { }

  ngOnInit(): void {
    this.links=['Home','Coaching','Empowering Entreprenuers', 'Earth and Soul Adventures','Podcasts'];
    this.showElement=false;

  }

  toggleNavigation(){
    this.showElement=!this.showElement;
  }

}
