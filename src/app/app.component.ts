
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'front';
  constructor(public router: Router) {}

  redirectToNassa(): void {
    this.router.navigate(['/nassa']);
  }

  redirectToSimpson(): void {
    this.router.navigate(['/simpson']);
  }
}