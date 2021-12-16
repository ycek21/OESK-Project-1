/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiPhotosService } from './api-photos.service';

describe('Service: ApiPhotos', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiPhotosService]
    });
  });

  it('should ...', inject([ApiPhotosService], (service: ApiPhotosService) => {
    expect(service).toBeTruthy();
  }));
});
