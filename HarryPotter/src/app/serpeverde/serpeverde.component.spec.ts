import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerpeverdeComponent } from './serpeverde.component';

describe('SerpeverdeComponent', () => {
  let component: SerpeverdeComponent;
  let fixture: ComponentFixture<SerpeverdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerpeverdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerpeverdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
