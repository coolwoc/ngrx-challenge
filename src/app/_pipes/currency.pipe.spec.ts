import {CurrencyPipe} from '../_pipes/currency.pipe';

describe('CurrencyPipe', () => {
  it('create an instance', () => {
    const pipe = new CurrencyPipe();
    expect(pipe).toBeTruthy();
  });
  it('pipe should be in thousans', () => {
    const pipe = new CurrencyPipe()
    let value = "1,000,000";
    let expected = "1.000.000";

    expect(pipe.transform(value)).toEqual(expected);
  })
});