import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoStatusRadioGroupComponent } from './todo-status-radio-group.component';

describe('TodoStatusRadioGroupComponent', () => {
  let component: TodoStatusRadioGroupComponent;
  let fixture: ComponentFixture<TodoStatusRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoStatusRadioGroupComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoStatusRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
