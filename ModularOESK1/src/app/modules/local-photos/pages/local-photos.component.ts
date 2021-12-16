import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local-photos',
  templateUrl: './local-photos.component.html',
  styleUrls: ['./local-photos.component.scss'],
})
export class LocalPhotosComponent implements OnInit {
  photos: string[] = [
    'assets/dogs/1.jpg',
    'assets/dogs/2.jpeg',
    'assets/dogs/3.jpeg',
    'assets/dogs/4.jpeg',
    'assets/dogs/5.jpeg',
    'assets/dogs/6.jpeg',
    'assets/dogs/7.jpeg',
    'assets/dogs/8.jpeg',
    'assets/dogs/9.jpeg',
    'assets/dogs/10.jpeg',
    'assets/dogs/11.jpeg',
    'assets/dogs/12.jpeg',
    'assets/dogs/13.jpeg',
    'assets/dogs/14.jpeg',
    'assets/dogs/15.jpeg',
    'assets/dogs/16.jpeg',
    'assets/dogs/17.jpeg',
    'assets/dogs/18.jpeg',
    'assets/dogs/19.jpeg',
    'assets/dogs/20.jpeg',
  ];

  constructor() {}

  ngOnInit() {}
}
