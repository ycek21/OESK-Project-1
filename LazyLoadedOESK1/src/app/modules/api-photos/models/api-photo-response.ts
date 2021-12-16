import { ApiPhoto } from './api-photo';

export interface ApiPhotoResponse {
  next_page: string;
  page: number;
  per_page: number;
  photos: ApiPhoto[];
  total_results: number;
}
