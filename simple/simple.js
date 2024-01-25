import fs from 'fs/promises'
import { parseArgs } from 'node:util'

const parsed = parseArgs ({
  args: process.argv.slice(2),
  options: {
    config: {
      type: 'string',
      short: 'c'
    }
  }
})

if (!parsed.values.config) {
  throw new Error('Missing config, specify it with --config')
}

// const file = await fs.readFile(parsed.values.config, 'utf-8')
// const data = JSON.parse(file)

const file = await import(parsed.values.config, { assert: { type: 'json' }});

// console.log(data)
console.log(file.default);

