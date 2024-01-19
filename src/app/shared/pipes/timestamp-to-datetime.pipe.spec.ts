import { TimestampToDatetimePipe } from './timestamp-to-datetime.pipe';

describe('TimestampToDatetimePipe', () => {
  it('create an instance', () => {
    const pipe = new TimestampToDatetimePipe();
    expect(pipe).toBeTruthy();
  });
});
