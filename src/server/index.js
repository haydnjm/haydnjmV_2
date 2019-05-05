/*
*
* Set up express server and send pre-rendered html document to client to be
* loaded before hydration
*
*/

import express from 'express'
import React from 'react'
import helmet from 'helmet'
import _ from 'lodash'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import serialize from 'serialize-javascript'
import { StaticRouter, matchPath } from 'react-router-dom'

import App from '../shared/App'
import routes from '../shared/routes'

// Route imports
import utils from './routes/utils'

// Create server
const server = express()
server.use(helmet())
server.use(express.static('public'))

// Use routes
utils(server)

server.get('*', (req, res, next) => {
  const activeRoute = _.find(routes, route => matchPath(req.url, route)) || {}

  const initPromise = activeRoute.fetchInitialData
    ? activeRoute.fetchInitialData()
    : Promise.resolve()

  initPromise.then((initialData = null) => {
    const context = { initialData }

    const sheet = new ServerStyleSheet()
    const body = renderToString(sheet.collectStyles(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    ))
    const styledTags = sheet.getStyleTags()

    res.status(200).send(`
      <!DOCTYPE html>
        <html>
          <head>
            <title>HAYDNJM</title>
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            ${styledTags}
            <script src="/bundle.js" defer></script>
            <link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet">
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="style.css">
            <script>window.__INITIAL_DATA__ = ${serialize(initialData)}</script>
          </head>

          <body>
            <div id="app">${body}</div>
          </body>
        </html>
    `)
  })
})

const PORT = process.env.PORT || 4000

server.listen(PORT, () => console.log(`Listening on port ${PORT}`))

server.use(express.static('public'))
