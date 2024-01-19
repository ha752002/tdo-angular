import { TestBed } from '@angular/core/testing';
import { TodoEventService } from './todo-event.service';

describe('TodoEventService', () => {
  let service: TodoEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
