import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TassorossoComponent } from './tassorosso.component';

describe('TassorossoComponent', () => {
  let component: TassorossoComponent;
  let fixture: ComponentFixture<TassorossoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TassorossoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TassorossoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
