import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorvoneroComponent } from './corvonero.component';

describe('CorvoneroComponent', () => {
  let component: CorvoneroComponent;
  let fixture: ComponentFixture<CorvoneroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorvoneroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorvoneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
