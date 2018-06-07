import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { SharedModule } from "./shared/shared.module";
import { CourseModule } from "./course/course.module";
import { CourseService } from "./course/course.service";
import { NgcourseService } from "./course/ngcourse.service";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, SharedModule, CourseModule],
  providers: [
    // { provide: CourseService, useClass: CourseService },
    { provide: "ENV", useValue: "PROD" },
    { provide: "API_KEY", useValue: "12swd356&5reg" },
    {
      provide: CourseService,
      useFactory: function(env) {
        if (env === "TEST") {
          return new NgcourseService();
        } else {
          return new CourseService();
        }
      },
      deps: ["ENV"]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
