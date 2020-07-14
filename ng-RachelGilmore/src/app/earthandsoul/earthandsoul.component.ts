import { Component, OnInit, HostBinding, ViewChild } from '@angular/core';

@Component({
  selector: 'app-earthandsoul',
  templateUrl: './earthandsoul.component.html',
  styleUrls: ['./earthandsoul.component.scss'],
})
export class EarthandsoulComponent implements OnInit {
  featuresData: any;
  packagesData:any;
  activePackage:any;
  currentlySelected:any;


  constructor() {
    this.currentlySelected=0;
    this.packagesData=[{
      package:'Soar to new heights',price:8000,points:['4 months of one on one coaching value $4k',
    'Weekly 1 hour coaching calls, coaching calls pre and post trip.',
    '10 days/nights transformational travel adventure (your choice of destinations) value $5500',
    'Inner circle community (private FB group) includes weekly coaching and group support valued $588',
    'Membership in Empowering Entrepreneurs mastermind group value $1K',
    '10% off all adventures/retreats with Earth and Soul Adventures value $500-$1K',
    'Direct messaging support during 4 months value $200',
    'Monthly payments are available'
  ]
    },
    {
      package:'Spread your wings',price:4000,points:['5 months of one on one coaching value $4k',
    'Weekly 1 hour coaching calls, coaching calls pre and post trip.',
    '10 days/nights transformational travel adventure (your choice of destinations) value $5500',
    'Inner circle community (private FB group) includes weekly coaching and group support valued $588',
    'Membership in Empowering Entrepreneurs mastermind group value $1K',
    '10% off all adventures/retreats with Earth and Soul Adventures value $500-$1K',
    'Direct messaging support during 4 months value $200',
    'Monthly payments are available'
  ]
    },
    {
      package:'Empowered to fly',price:333,points:['6 months of one on one coaching value $4k',
    'Weekly 1 hour coaching calls, coaching calls pre and post trip.',
    '10 days/nights transformational travel adventure (your choice of destinations) value $5500',
    'Inner circle community (private FB group) includes weekly coaching and group support valued $588',
    'Membership in Empowering Entrepreneurs mastermind group value $1K',
    '10% off all adventures/retreats with Earth and Soul Adventures value $500-$1K',
    'Direct messaging support during 4 months value $200',
    'Monthly payments are available'
  ]
    },
    {
      package:'Expand to new Horizons',price:49,points:['6 months of one on one coaching value $4k',
    'Weekly 1 hour coaching calls, coaching calls pre and post trip.',
    '10 days/nights transformational travel adventure (your choice of destinations) value $5500',
    'Inner circle community (private FB group) includes weekly coaching and group support valued $588',
    'Membership in Empowering Entrepreneurs mastermind group value $1K',
    '10% off all adventures/retreats with Earth and Soul Adventures value $500-$1K',
    'Direct messaging support during 4 months value $200',
    'Monthly payments are available'
  ]}

  ]

    this.activePackage=this.packagesData[0].points;

    this.featuresData = [
      {
        imageUrl:
        "https://static.wixstatic.com/media/27864a_1888ec9ab16f44769be095a97353398a~mv2.jpg/v1/fill/w_640,h_639,al_c,q_85/Charlotte%20Influencer%E2%80%99s%20Retreat.webp",
        title: 'Personal Journey',
        description:
          'Earth & Soul Adventures offers an experience that invites people to step away from their ordinary routine lives and go on a personal journey of self discovery & self development.',
      },
      {
        imageUrl:
          'https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto/v1/homepage-assets/new-homepage/value-prop-online.png',
        title: 'Adventure',
        description:"Earth and Soul Adventures is more than just a Retreat, it is a daily adventure - exploring and experiencing all that the beautiful destination has to offer on excursions.  Embark on an adventure that will leave you invigorated, inspired, and motivated to create and live the life of your dreams.  Connect with the truth of who you are and the work you are here to do in this world. Step outside of your comfort zone and remember how capable and powerful you are!" },
      {
        imageUrl:
          'https://static.wixstatic.com/media/27864a_57875d8b3d9c49d7956ba21c37ae3e94~mv2.jpg/v1/fill/w_768,h_598,al_c,lg_1,q_85/I%20am%20still%20basking%20in%20the%20amazingness%20of.webp',
        title: 'Connect',
        description:
         "By choosing Earth & Soul Adventures, you will travel with beautiful souls who share a similar journey and build friendships that will last a lifetime. With your newfound community, you will soar to new levels with the love and support of your new tribe. "},
      {
        imageUrl:
          'https://res.cloudinary.com/springboard-images/image/upload/c_limit,dpr_1.0,f_auto,fl_lossy,q_auto/v1/homepage-assets/new-homepage/value-prop-online.png',
        title: 'Explore',
        description:"You will have the opportunity to immerse yourself in cultures in some of the most beautiful destinations around the world.  Our Transformational Travel Adventures are more than just an all inclusive vacation.  You will experience the beauty of the earth and its inhabitants." }
    ];
  }

  ngOnInit(): void {}

  showPackagePoints(index){
    this.activePackage=this.packagesData[index].points;
    this.currentlySelected=index;



  }
}
