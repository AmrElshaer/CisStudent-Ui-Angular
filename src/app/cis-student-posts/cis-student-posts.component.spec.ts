import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CisStudentPostsComponent } from './cis-student-posts.component';

describe('CisStudentPostsComponent', () => {
  let component: CisStudentPostsComponent;
  let fixture: ComponentFixture<CisStudentPostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CisStudentPostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CisStudentPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
