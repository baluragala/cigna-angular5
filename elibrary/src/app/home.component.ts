import {
  Component,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter
} from "@angular/core";

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
        <button (click)="ping($event)">Ping</button>
        <button (click)="pong($event)">Pong</button>
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

  @Output() buttonClicked: EventEmitter<string> = new EventEmitter();

  ping() {
    this.buttonClicked.emit("PING");
  }
  pong() {
    this.buttonClicked.emit("PONG");
  }

  doublePing(eventArgs: any) {
    console.log(eventArgs);
    alert("Hurray, it works- twice!!!");
  }
}
