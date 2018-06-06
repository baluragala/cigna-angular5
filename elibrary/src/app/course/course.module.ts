import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseListItemComponent } from "./course-list-item/course-list-item.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    AddCourseComponent
  ],
  exports: [CourseListComponent, AddCourseComponent]
})
export class CourseModule {}
