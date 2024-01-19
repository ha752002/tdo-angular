import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoTabsComponent } from './todo-tabs.component';

describe('TodoTabsComponent', () => {
  let component: TodoTabsComponent;
  let fixture: ComponentFixture<TodoTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoTabsComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TodoTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
