module.exports = server => {
  server.get(
    '/api/test-route',
    (req, res) => res.send('This is a test')
  )
}
