import assert from 'assert'
import { describe, it } from 'node:test'
import { message } from './lib.mjs'

describe('basic', () => {
  it('test', () => {
    assert.strictEqual("Hello, World!", message())
  });
});
