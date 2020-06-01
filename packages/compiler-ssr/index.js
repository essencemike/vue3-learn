'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/compiler-ssr.cjs.prod.js')
} else {
  module.exports = require('./dist/compiler-ssr.cjs.js')
}
