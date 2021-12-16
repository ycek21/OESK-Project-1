import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiPhotosComponent } from './modules/api-photos/pages/api-photos.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
