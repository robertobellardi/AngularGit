import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrifondoroComponent } from './grifondoro.component';

describe('GrifondoroComponent', () => {
  let component: GrifondoroComponent;
  let fixture: ComponentFixture<GrifondoroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrifondoroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrifondoroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
