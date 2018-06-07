import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseListItemComponent } from "./course-list-item/course-list-item.component";
import { AddCourseComponent } from "./add-course/add-course.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddCourseReactiveComponent } from "./add-course-reactive/add-course-reactive.component";
import { CourseService } from "./course.service";
import { CourseDetailComponent } from "./course-detail/course-detail.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([])
  ],
  declarations: [
    CourseListComponent,
    CourseListItemComponent,
    AddCourseComponent,
    AddCourseReactiveComponent,
    CourseDetailComponent
  ],
  exports: [
    CourseListComponent,
    AddCourseComponent,
    AddCourseReactiveComponent,
    CourseDetailComponent
  ]
})
export class CourseModule {}
