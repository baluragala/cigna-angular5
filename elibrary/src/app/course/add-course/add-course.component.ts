import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
@Component({
  selector: "el-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.css"]
})
export class AddCourseComponent implements OnInit {
  course = {
    title: "React",
    mode: "MENTORING",
    price: ""
  };

  modes = ["CLASSROOM", "ONLINE", "MENTORING"];
  constructor() {}

  ngOnInit() {}

  doSubmit(f: NgForm) {
    console.log(f.value);
  }
}
