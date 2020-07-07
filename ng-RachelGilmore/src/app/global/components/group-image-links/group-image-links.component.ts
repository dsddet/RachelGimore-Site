import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-group-image-links',
  templateUrl: './group-image-links.component.html',
  styleUrls: ['./group-image-links.component.scss'],
})
export class GroupImageLinksComponent implements OnInit {
  @Input() color: string;
  cstyle:{color:string};
  constructor() {}

  ngOnInit(): void {
    this.cstyle={color:this.color};
  }
}
