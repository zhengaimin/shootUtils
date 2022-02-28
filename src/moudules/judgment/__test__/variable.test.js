import { noop } from '@/moudules/common';
import { isObject } from '../variable';

test('isObject', () => {
  expect(isObject({})).toBeTruthy();

  expect(isObject(null)).toBeFalsy();
  expect(isObject(undefined)).toBeFalsy();
  expect(isObject(noop)).toBeFalsy();
  expect(isObject(noop())).toBeFalsy();
});
