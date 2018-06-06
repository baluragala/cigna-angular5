import { Component, ViewEncapsulation } from "@angular/core";

/*
1. class
2. metadata
3. template
*/

@Component({
  selector: "el-home",
  template: `
    <div class="jumbotron">
        <h1>{{title.toUpperCase()}}</h1>
        <p>your library, now online...</p>
    </div>
    `,
  styles: [
    `
      p {
        font-size: 1.5em;
        font-weight: bold;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  title: string = "elibrary";
}
