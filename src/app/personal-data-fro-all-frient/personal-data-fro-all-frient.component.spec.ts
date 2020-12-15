import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDataFroAllFrientComponent } from './personal-data-fro-all-frient.component';

describe('PersonalDataFroAllFrientComponent', () => {
  let component: PersonalDataFroAllFrientComponent;
  let fixture: ComponentFixture<PersonalDataFroAllFrientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDataFroAllFrientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDataFroAllFrientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
