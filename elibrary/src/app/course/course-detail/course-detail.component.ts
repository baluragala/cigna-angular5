import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CourseService } from "../course.service";

@Component({
  selector: "el-course-detail",
  templateUrl: "./course-detail.component.html",
  styleUrls: ["./course-detail.component.css"]
})
export class CourseDetailComponent implements OnInit {
  courseId: string;
  title: string;
  mode: string;
  price: number;
  constructor(private route: ActivatedRoute, private service: CourseService) {
    console.log(route);
  }

  ngOnInit() {
    this.courseId = this.route.snapshot.params["courseId"];
    let course = this.service.getCourse(parseInt(this.courseId));
    this.title = course.title;
    this.price = course.price;
    this.mode = course.mode;
  }
}
