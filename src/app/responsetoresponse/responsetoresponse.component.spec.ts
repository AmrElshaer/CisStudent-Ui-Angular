import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsetoresponseComponent } from './responsetoresponse.component';

describe('ResponsetoresponseComponent', () => {
  let component: ResponsetoresponseComponent;
  let fixture: ComponentFixture<ResponsetoresponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsetoresponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsetoresponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
