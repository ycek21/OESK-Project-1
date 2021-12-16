import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPhotosService } from './modules/api-photos/services/api-photos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'OESK Project 1.';

  constructor(private router: Router) {}

  public redirectToLocalGallery() {
    this.router.navigate(['local']);
  }

  public redirectToMainPage() {
    this.router.navigate(['']);
  }

  public redirectToApiGallery() {
    this.router.navigate(['api']);
  }
}
