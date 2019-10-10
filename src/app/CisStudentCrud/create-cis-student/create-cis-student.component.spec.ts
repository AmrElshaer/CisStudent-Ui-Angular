import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCisStudentComponent } from './create-cis-student.component';

describe('CreateCisStudentComponent', () => {
  let component: CreateCisStudentComponent;
  let fixture: ComponentFixture<CreateCisStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCisStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCisStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
