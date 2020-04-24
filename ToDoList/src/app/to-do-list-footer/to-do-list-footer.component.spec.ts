import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListFooterComponent } from './to-do-list-footer.component';

describe('ToDoListFooterComponent', () => {
  let component: ToDoListFooterComponent;
  let fixture: ComponentFixture<ToDoListFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
