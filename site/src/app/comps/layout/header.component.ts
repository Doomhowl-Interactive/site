import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}
