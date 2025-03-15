import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: false,
})
export class AppComponent {
  footerIconSize = 50 as const;
  currentYear = new Date().getUTCFullYear();

  constructor(private router: Router) {}

  goHome() {
    console.log('Navigating to home page');
    this.router.navigate(['/']);
  }
}
