import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentoposttComponentComponent } from './commentopostt-component.component';

describe('CommentoposttComponentComponent', () => {
  let component: CommentoposttComponentComponent;
  let fixture: ComponentFixture<CommentoposttComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentoposttComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentoposttComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
