import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links: String[];
  showElement: boolean;
  state: string = null;
  stateStyles:any=null;
  linkStyles:any=null;
  @HostListener('window:scroll', ['$event']) spit(event) {
    let pos = event.target.scrollingElement.scrollTop;

    if(pos<365){
      this.stateStyles=null;
      this.linkStyles=null;
      this.state=null;
    }
    if (pos >= 366 && pos <= 729) {
      if(this.state!='green'){
        this.stateStyles={'background-color':'#c9efd7'};
        this.linkStyles={'color':'#177594'};
        this.state='green';
      }
    }

    if (pos >= 730 && pos <= 1225) {
      if(this.state!='purple'){
        this.stateStyles={'background-color':'#c8d1ef'};
        this.linkStyles={'color':'#556CA4'};
        this.state='purple';
      }
    }

    if (pos >= 1226 && pos <= 1939) {
      if(this.state!='white'){
        this.stateStyles={'background-color':'#F0F3F4'};
        this.linkStyles={'color':'rgb(131, 131, 131)'};
        this.state='white';
      }
    }

    if (pos >= 1940) {
      if(this.state!='blue'){
        this.stateStyles={'background-color':'#013483'};
        this.linkStyles={'color':'#bcc9d8'};
        this.state='blue';
      }

    }
  }

  constructor() {}

  ngOnInit(): void {
    this.links = [
      'Home',
      'Coaching',
      'Empowering Entreprenuers',
      'Earth and Soul Adventures',
      'Podcasts',
    ];
    this.showElement = false;
  }

  toggleNavigation() {
    this.showElement = !this.showElement;
  }
}
