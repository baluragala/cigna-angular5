import { Component, OnInit } from "@angular/core";

@Component({
  selector: "el-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  style = {};
  today = new Date();

  pi: number = 3.14;
  e: number = 2.718281828459045;
  constructor() {
    setTimeout(() => {
      this.style = {
        backgroundColor: "red",
        color: "white",
        fontSize: "26px",
        border: "1px solid green"
      };
    }, 3000);
  }

  ngOnInit() {}
}
