describe('DebounceInput', () => {
  const DebounceInputInjector = require('inject!../src/DebounceInput');
  let mock, DebounceInput;


  beforeEach(() => {
    mock = jasmine.createSpyObj('mock', ['']);
  });


  beforeEach(() => DebounceInput = DebounceInputInjector({
    mock
  }));


  it('should be ok', () => {
    expect(DebounceInput).toBeTruthy();
  });
});
