import { Component, OnInit, Inject } from "@angular/core";
import { CourseService } from "../course.service";
import { Course } from "../course";

@Component({
  selector: "el-course-list",
  templateUrl: "./course-list.component.html",
  styleUrls: ["./course-list.component.css"]
})
export class CourseListComponent implements OnInit {
  // style = {};
  // today = new Date();

  // pi: number = 3.14;
  // e: number = 2.718281828459045;
  courses: Array<Course>;
  constructor(
    private service: CourseService,
    @Inject("API_KEY") private apiKey: string
  ) {}

  ngOnInit() {
    this.courses = this.service.getCourses();
  }
}
