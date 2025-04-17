import assert from 'assert'
import { describe, it } from 'node:test'
import { listPullRequests } from './lib.mjs'

describe('basic', () => {
  it('listPullRequests', () => {
    assert.strictEqual("No open pull requests found.", listPullRequests({ data: [] }))
    assert.strictEqual("Found 1 open pull request(s):\n#1: the title (by maia)", listPullRequests({
      data: [
        {
          number: '1',
          title: 'the title',
          user: {
            login: 'maia'
          }
        }
      ]
    }))
  });
});
