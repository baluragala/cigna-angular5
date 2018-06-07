import { Injectable } from "@angular/core";
import { Course } from "./course";

@Injectable()
export class NgcourseService {
  constructor() {}

  courses: Array<Course> = [
    {
      id: 1,
      title: "angular-ng",
      mode: "ONLINE",
      price: 200
    },
    {
      id: 2,
      title: "React-ng",
      mode: "CLASSROOM",
      price: 200
    },
    {
      id: 3,
      title: "Ember-ng",
      mode: "ONLINE",
      price: 200
    }
  ];

  getCourses(): Array<Course> {
    return this.courses;
  }

  addCourse(course: Course) {
    this.courses.push(course);
  }

  updateCourse() {}

  deleteCourse() {}
}
