import { Component } from '@angular/core';
import libsJson from './licenses.json' assert { type: 'json' };
import { RouterLink } from '@angular/router';

type Lib = {
  id: string;
  name: string;
  content: string;
};

@Component({
  selector: 'app-pages-licenses',
  imports: [RouterLink],
  standalone: true,
  template: `
    <nav>
      <p class="text-center">
        <a class="text-link-underline" routerLink="/">Go back</a>
      </p>
    </nav>
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
  styles: `
    a {
      color: lightgray;
    }
  `,
})
export class LicensesComponent {
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
