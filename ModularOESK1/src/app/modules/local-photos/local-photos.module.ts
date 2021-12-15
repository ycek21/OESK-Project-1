import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocalPhotosComponent } from './pages/local-photos.component';

@NgModule({
  declarations: [LocalPhotosComponent],
  imports: [SharedModule],
})
export class LocalPhotosModule {}
