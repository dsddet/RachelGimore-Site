import { Component, OnInit } from '@angular/core';
import {podcast} from '../../global/components/podcast/podcast.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  homePodcasts:podcast[];
  constructor() {
    this.homePodcasts = [{
      podcastId: '#1479',
      dateCreated: '06.01.2020',
      guestName: 'DAVID PAKMAN',
      guestAbout:
        'David Pakman is a television & radio host, political commentator, and Youtube personality. He is the',
      social: { insta: '@dpakman', web: 'davidpakman.com' },
      links: ['spotify','apple podcast']
    },
    {
      podcastId: '#1480',
      dateCreated: '06.02.2020',
      guestName: 'MARGO BOYLE',
      guestAbout:
        'Margo Boyle is a television & radio host, political commentator, and Youtube personality. He is the',
      social: { insta: '@mboyle', web: 'margoboyle.com' },
      links: ['spotify','apple podcast']
    },
    {
      podcastId: '#1481',
      dateCreated: '06.03.2020',
      guestName: 'TONNY HAWK',
      guestAbout:
        'Tonny Hawk is a television & radio host, political commentator, and Youtube personality. He is the',
      social: { insta: '@thawk', web: 'tonnyhawk.com' },
      links: ['spotify','apple podcast']
    },
    {
      podcastId: '#1484',
      dateCreated: '06.04.2020',
      guestName: 'JOHN DOE',
      guestAbout:
        'John Doe is a television & radio host, political commentator, and Youtube personality. He is the',
      social: { insta: '@jdoe', web: 'johndoe.com' },
      links: ['spotify','apple podcast']
    },
  ];
  }

  ngOnInit(): void {
  }

}
