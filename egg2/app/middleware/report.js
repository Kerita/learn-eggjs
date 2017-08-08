module.exports = () => {
  return function *(next) {
    const start = Date.now()
    yield next
    reportTime(Date.now() - start)
  }
}
