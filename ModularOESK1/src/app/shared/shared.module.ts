import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';

@NgModule({
  declarations: [PhotoGalleryComponent],
  imports: [CommonModule, MaterialModule],
  exports: [MaterialModule, CommonModule, PhotoGalleryComponent],
})
export class SharedModule {}
