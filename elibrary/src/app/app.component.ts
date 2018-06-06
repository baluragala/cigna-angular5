import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "el-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = "angular";
  titles = ["online library", "new library", "tech library"];
  index = 0;
  messageFromHome: string = "";
  constructor() {
    this.index = Math.floor(Math.random() * 2);
  }

  handleButtonClick(eventArgs: string) {
    console.log(eventArgs);
    this.messageFromHome = eventArgs;
  }
}
