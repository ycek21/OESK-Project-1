import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalPhotosModule } from './modules/local-photos/local-photos.module';
import { LocalPhotosComponent } from './modules/local-photos/pages/local-photos.component';

const routes: Routes = [{ path: 'local', component: LocalPhotosComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
