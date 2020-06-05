import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-podcast',
  templateUrl: './podcast.component.html',
  styleUrls: ['./podcast.component.scss'],
})
export class PodcastComponent implements OnInit {
  @Input() podcasts:podcast[];

  constructor() {
  }



  ngOnInit(): void {}



}


export interface podcast {podcastId:string,dateCreated:string,guestName:string,guestAbout:string,social:{insta?:any,fb?:any,web?:any},links:string[]};
