import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "el-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent {
  title = "angular";
}
