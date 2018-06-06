import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home.component";
import { SharedModule } from "./shared/shared.module";
import { CourseModule } from "./course/course.module";

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [BrowserModule, SharedModule, CourseModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
