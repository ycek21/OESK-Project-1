import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as CONST from 'src/app/shared/const';
import { ApiPhotoResponse } from '../models/api-photo-response';

@Injectable({
  providedIn: 'root',
})
export class ApiPhotosService {
  constructor(private http: HttpClient) {}

  public getPhotos(
    filter: string,
    photosPerPage: number,
    pageNumber?: number
  ): Observable<ApiPhotoResponse> {
    let url =
      CONST.BASE_URL + `search?query=${filter}&per_page=${photosPerPage}`;

    if (pageNumber) {
      url += `&page=${pageNumber}`;
    }

    const authHeaders: HttpHeaders = new HttpHeaders().set(
      'Authorization',
      CONST.API_KEY
    );

    return this.http.get<ApiPhotoResponse>(url, { headers: authHeaders });
  }
}
