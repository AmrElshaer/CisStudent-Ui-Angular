import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CisStudentProfileComponentComponent } from './cis-student-profile-component.component';

describe('CisStudentProfileComponentComponent', () => {
  let component: CisStudentProfileComponentComponent;
  let fixture: ComponentFixture<CisStudentProfileComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CisStudentProfileComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CisStudentProfileComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
