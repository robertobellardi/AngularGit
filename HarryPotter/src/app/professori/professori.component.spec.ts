import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessoriComponent } from './professori.component';

describe('ProfessoriComponent', () => {
  let component: ProfessoriComponent;
  let fixture: ComponentFixture<ProfessoriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessoriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessoriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
