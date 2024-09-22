import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-footer',
  templateUrl: './footer.component.html',
  standalone: true,
})
export class FooterComponent {
  doCreditGooglePlay = false;
  currentYear = new Date().getUTCFullYear();
}
