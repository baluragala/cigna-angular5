import { Component, ViewEncapsulation, Input } from "@angular/core";

/*
1. class
2. metadata
3. template
*/

@Component({
  selector: "el-home",
  template: `
    <div class="jumbotron">
        <h1 [title]="mainTitle.toUpperCase()" [style.backgroundColor]="'red'">{{mainTitle.toUpperCase()}}</h1>
        <p>your library, now online...</p>
        <button (dblclick)="doublePing($event)">Ping</button>
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
  @Input() mainTitle: string = "";

  ping() {
    alert("Hurray, it works!!!");
  }

  doublePing(eventArgs: any) {
    console.log(eventArgs);
    alert("Hurray, it works- twice!!!");
  }
}
