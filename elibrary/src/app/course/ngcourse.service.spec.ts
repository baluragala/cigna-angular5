import { TestBed, inject } from '@angular/core/testing';

import { NgcourseService } from './ngcourse.service';

describe('NgcourseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgcourseService]
    });
  });

  it('should be created', inject([NgcourseService], (service: NgcourseService) => {
    expect(service).toBeTruthy();
  }));
});
