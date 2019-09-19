const routes = require('express').Router();
const path = require('path')

routes.get('/survey', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/survey.html'))
})

routes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'../public/index.html'))
})

/// Error handling, if a route does not exist default to the home page.
routes.get('*', (req, res) => {
  res.send('404')
})

module.exports = routes;