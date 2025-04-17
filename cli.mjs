import { message } from './lib.mjs'
import { parseArgs } from 'node:util'

const options = {
  hi: {
    type: 'string',
    short: 'h',
  },
}

async function main(args) {
  const {
    values,
    positionals,
  } = parseArgs({
    args,
    options,
    allowPositionals: true,
  });

  console.log(values, positionals);
}

await main(process.argv)
