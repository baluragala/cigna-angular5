import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable()
export class CourseService {
  courses: Array<Course> = [
    {
      id: 1,
      title: "angular",
      mode: "ONLINE",
      price: 200
    },
    {
      id: 2,
      title: "React",
      mode: "CLASSROOM",
      price: 200
    },
    {
      id: 3,
      title: "Ember",
      mode: "ONLINE",
      price: 200
    }
  ];
  constructor() {}

  getCourses(): Array<Course> {
    return this.courses;
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }

  updateCourse() {}

  deleteCourse() {}
}
