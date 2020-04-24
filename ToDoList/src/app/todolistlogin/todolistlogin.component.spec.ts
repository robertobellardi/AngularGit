import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodolistloginComponent } from './todolistlogin.component';

describe('TodolistloginComponent', () => {
  let component: TodolistloginComponent;
  let fixture: ComponentFixture<TodolistloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodolistloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodolistloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
