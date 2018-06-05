import { Component } from "@angular/core";

/*
1. class
2. metadata
3. template
*/

@Component({
  selector: "el-home",
  template: `
    <div class="jumbotron">
        <h1>elibrary</h1>
        <p>your library, now online...</p>
    </div>
    `,
  styles: [
    `
      h1 {
        color: red;
      }

      p {
        font-size: 1.5em;
        font-weight: bold;
      }
    `
  ]
})
export class HomeComponent {}
