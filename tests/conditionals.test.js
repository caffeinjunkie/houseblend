const { isNull } = require('../src/conditionals')

describe('Conditionals', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should return false if object is not null', () => {
    const value = {
      val: 'xx'
    };

    const result = isNull(value);

    expect(result).toBeFalsy();
  });

  it('should return false if object is empty object', () => {
    const value = {};

    const result = isNull(value);

    expect(result).toBeFalsy();
  });

  it('should return true if object is null', () => {
    const value = null;

    const result = isNull(value);

    expect(result).toBeTruthy();
  });
});