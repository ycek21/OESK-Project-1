import { Component, OnInit } from '@angular/core';
import { ApiPhoto } from '../models/api-photo';
import { ApiPhotoResponse } from '../models/api-photo-response';
import { ApiPhotosService } from '../services/api-photos.service';

@Component({
  selector: 'app-api-photos',
  templateUrl: './api-photos.component.html',
  styleUrls: ['./api-photos.component.scss'],
})
export class ApiPhotosComponent implements OnInit {
  photosUrl: string[] = [];

  constructor(private apiPhotosService: ApiPhotosService) {}

  ngOnInit() {
    this.apiPhotosService
      .getPhotos('dogs', 20)
      .subscribe((photosFromApi: ApiPhotoResponse) => {
        photosFromApi.photos.forEach((photo: ApiPhoto) => {
          this.photosUrl.push(photo.src.large);
        });
      });
  }
}
