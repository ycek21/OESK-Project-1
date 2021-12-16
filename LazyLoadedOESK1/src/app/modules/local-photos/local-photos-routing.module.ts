import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalPhotosComponent } from './pages/local-photos.component';

const routes: Routes = [{ path: '', component: LocalPhotosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalPhotosRoutingModule {}
