import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocalPhotosRoutingModule } from './local-photos-routing.module';
import { LocalPhotosComponent } from './pages/local-photos.component';

@NgModule({
  declarations: [LocalPhotosComponent],
  imports: [SharedModule, LocalPhotosRoutingModule],
})
export class LocalPhotosModule {}
