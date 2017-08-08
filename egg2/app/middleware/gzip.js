const isJSON = require('koa-is-json')
const zlib = require('zlib')

module.exports = options => {
  return function *gzip(next) {
    yield next

    let body = this.body
    if (!body) return

    if (options.threshold && this.length < options.threshold) return

    if (isJSON(body)) body = JSON.stringify(body)

    const stream = zlib.createGzip()
    stream.end(body)

    this.body = stream
    this.set('Content-Encodding', 'gzip')
  }
}