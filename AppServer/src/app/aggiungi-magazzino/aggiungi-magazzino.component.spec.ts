import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiMagazzinoComponent } from './aggiungi-magazzino.component';

describe('AggiungiMagazzinoComponent', () => {
  let component: AggiungiMagazzinoComponent;
  let fixture: ComponentFixture<AggiungiMagazzinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AggiungiMagazzinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AggiungiMagazzinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
