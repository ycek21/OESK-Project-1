import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiPhotosComponent } from './pages/api-photos.component';

const routes: Routes = [{ path: '', component: ApiPhotosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiPhotosRoutingModule {}
