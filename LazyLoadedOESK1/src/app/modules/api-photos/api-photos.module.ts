import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiPhotosComponent } from './pages/api-photos.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiPhotosRoutingModule } from './api-photos-routing.module';
import { ApiPhotosService } from './services/api-photos.service';

@NgModule({
  declarations: [ApiPhotosComponent],
  imports: [
    CommonModule,
    SharedModule,
    HttpClientModule,
    ApiPhotosRoutingModule,
  ],
  providers: [ApiPhotosService],
})
export class ApiPhotosModule {}
