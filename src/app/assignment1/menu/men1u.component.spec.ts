import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Men1uComponent } from './men1u.component';

describe('MenuComponent', () => {
  let component: Men1uComponent;
  let fixture: ComponentFixture<Men1uComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Men1uComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Men1uComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
