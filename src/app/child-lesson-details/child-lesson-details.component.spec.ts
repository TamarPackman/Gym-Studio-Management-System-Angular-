import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLessonDetailsComponent } from './child-lesson-details.component';

describe('ChildLessonDetailsComponent', () => {
  let component: ChildLessonDetailsComponent;
  let fixture: ComponentFixture<ChildLessonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildLessonDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildLessonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
