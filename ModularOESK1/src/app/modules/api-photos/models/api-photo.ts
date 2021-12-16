export interface ApiPhoto {
  alt: string;
  avg_color: string;
  id: number;
  liked: boolean;
  photographer: string;
  photographer_id: number;
  photographer_url: string;
  url: string;
  width: number;
  src: ApiPhotoSrc;
}

interface ApiPhotoSrc {
  landscape: string;
  large: string;
  large2x: string;
  medium: string;
  originial: string;
  portrait: string;
  small: string;
  tiny: string;
}
