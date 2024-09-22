import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from '../comps/logo.component';

@Component({
  selector: 'app-layout-header',
  standalone: true,
  imports: [RouterOutlet, LogoComponent],
  template: `
    <header>
      
    </header>
  `,
})
export class HeaderComponent {}
