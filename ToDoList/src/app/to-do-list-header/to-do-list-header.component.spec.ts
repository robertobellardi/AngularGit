import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoListHeaderComponent } from './to-do-list-header.component';

describe('ToDoListHeaderComponent', () => {
  let component: ToDoListHeaderComponent;
  let fixture: ComponentFixture<ToDoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoListHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
