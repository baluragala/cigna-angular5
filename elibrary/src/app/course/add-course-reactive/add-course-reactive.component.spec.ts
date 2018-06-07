import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseReactiveComponent } from './add-course-reactive.component';

describe('AddCourseReactiveComponent', () => {
  let component: AddCourseReactiveComponent;
  let fixture: ComponentFixture<AddCourseReactiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCourseReactiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
