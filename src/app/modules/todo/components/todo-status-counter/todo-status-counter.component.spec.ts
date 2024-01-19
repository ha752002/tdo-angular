import {ComponentFixture, TestBed} from '@angular/core/testing';

import {TodoStatusCounterComponent} from './todo-status-counter.component';

describe('TodoStatusCounterComponent', () => {
  let component: TodoStatusCounterComponent;
  let fixture: ComponentFixture<TodoStatusCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TodoStatusCounterComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoStatusCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
