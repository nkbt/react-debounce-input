import test from 'tape';
import {DebounceInput} from '../src/Component';


test('DebounceInput', t => {
  t.ok(DebounceInput instanceof Function, 'should be function');
  t.end();
});
