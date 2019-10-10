import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponseforcommentComponent } from './responseforcomment.component';

describe('ResponseforcommentComponent', () => {
  let component: ResponseforcommentComponent;
  let fixture: ComponentFixture<ResponseforcommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseforcommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseforcommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
