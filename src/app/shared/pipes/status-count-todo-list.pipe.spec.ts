import { StatusCountTodoListPipe } from './status-count-todo-list.pipe';

describe('StatusCountTodoListPipe', () => {
  it('create an instance', () => {
    const pipe = new StatusCountTodoListPipe();
    expect(pipe).toBeTruthy();
  });
});
