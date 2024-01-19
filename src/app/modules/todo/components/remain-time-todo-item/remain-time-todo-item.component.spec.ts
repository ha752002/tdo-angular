import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RemainTimeTodoItemComponent} from './remain-time-todo-item.component';

describe('RemainTimeTodoItemComponent', () => {
  let component: RemainTimeTodoItemComponent;
  let fixture: ComponentFixture<RemainTimeTodoItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RemainTimeTodoItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RemainTimeTodoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
