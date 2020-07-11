import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  rightThumbImages10: any;
  leftThumbImages10: any;
  middleTHumbImages5: any;
  leftThumbVideos10: any;
  activeImage: string;
  thumbImage: string;
  current: number;
  clearInterval;

  constructor() {
    this.leftThumbImages10 = [10, 3, 2, 4, 5, 11, 6, 9, 1, 7];
    this.rightThumbImages10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.middleTHumbImages5 = [12, 11, 3, 8, 10];
    this.thumbImage = '/assets/image-gall-2.jpg';
    this.activeImage = '/assets/camping-img-gallery.jpg';
    this.current = 1;
  }

  ngOnInit(): void {
    this.clearInterval=setInterval(() => {
      if (this.current >= 12) {
        this.current = 1;
      } else {
        this.activeImage = '/assets/gallery/' + this.current + '.png';
        this.current++;
      }
    }, 3000);
  }

  changeViewImage() {}

  // setInterval(()=>{this.changeViewImage();},3000);

  changeImage(imageId) {
    this.activeImage='/assets/gallery/' + imageId + '.png';
    clearInterval(this.clearInterval);
  }
}
