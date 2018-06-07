import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "el-add-course-reactive",
  templateUrl: "./add-course-reactive.component.html",
  styleUrls: ["./add-course-reactive.component.css"]
})
export class AddCourseReactiveComponent implements OnInit {
  courseForm: FormGroup;
  modes = ["CLASSROOM", "ONLINE", "MENTORING"];
  constructor() {}

  ngOnInit() {
    this.courseForm = new FormGroup({
      title: new FormControl("angular", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ]),
      mode: new FormControl(),
      price: new FormControl()
    });
  }

  doSubmit() {
    console.log(this.courseForm.value);
  }

  load() {
    setTimeout(() => {
      let response = {
        title: "vue course",
        mode: "ONLINE",
        price: 150
      };
      this.courseForm.patchValue(response);
    }, 2000);
  }
}
