import { Component } from '@angular/core';
import libsJson from './licenses.json' assert { type: 'json' };
import { RouterLink } from '@angular/router';
import { BackButtonComponent } from '../../../comps/back-button.component';

type Lib = {
  id: string;
  name: string;
  content: string;
};

@Component({
  selector: 'app-pages-licenses-vortex',
  imports: [RouterLink, BackButtonComponent],
  standalone: true,
  template: `
    <app-comps-back-button />
    <h1>Vortex software licenses</h1>
    <nav>
      <ul>
        @for (lib of libs; track lib.id) {
        <li>
          <a href="/licenses/vortex#{{ libId(lib) }}">{{ lib.name }}</a>
        </li>
        }
      </ul>
    </nav>

    @for (lib of libs; track lib.id) {
    <article>
      <h2 id="{{ libId(lib) }}">{{ lib.name }}</h2>
      <pre>
        {{ lib.content }}
      </pre
      >
    </article>
    }
  `,
})
export class VortexLicensesComponent {
  libs: Lib[] = [];

  constructor() {
    let i = 0;
    for (const lib of Object.entries(libsJson)) {
      this.libs.push({
        id: (i++).toString(),
        name: lib[0],
        content: lib[1],
      });
    }
  }

  libId(lib: Lib) {
    return `lib-${lib.id}`;
  }
}
