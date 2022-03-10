import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dishdeta11ilsComponent } from './dishdeta11ils.component';

describe('DishdetailsComponent', () => {
  let component: Dishdeta11ilsComponent;
  let fixture: ComponentFixture<Dishdeta11ilsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dishdeta11ilsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dishdeta11ilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
