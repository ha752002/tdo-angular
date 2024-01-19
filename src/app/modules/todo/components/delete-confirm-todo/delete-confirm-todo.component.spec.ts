import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DeleteConfirmTodoComponent} from './delete-confirm-todo.component';

describe('DeleteConfirmTodoComponent', () => {
  let component: DeleteConfirmTodoComponent;
  let fixture: ComponentFixture<DeleteConfirmTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteConfirmTodoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DeleteConfirmTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
