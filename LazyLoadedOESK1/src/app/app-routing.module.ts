import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'local',
    loadChildren: () =>
      import('./modules/local-photos/local-photos.module').then(
        (m) => m.LocalPhotosModule
      ),
  },
  {
    path: 'api',
    loadChildren: () =>
      import('./modules/api-photos/api-photos.module').then(
        (m) => m.ApiPhotosModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
