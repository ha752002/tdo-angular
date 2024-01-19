import { TodoStatusFilterPipe } from './todo-status-filter.pipe';

describe('TodoStatusFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new TodoStatusFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
