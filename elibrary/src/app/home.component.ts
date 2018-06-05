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
    `
})
export class HomeComponent {}
