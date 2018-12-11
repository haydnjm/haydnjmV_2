/*
*
* Set up express server and send pre-rendered html document to client to be
* loaded before hydration
*
*/

import express from 'express'
import React from 'react'
import helmet from 'helmet'
import fs from 'fs'
import _ from 'lodash'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'

import App from '../shared/app'

// Route imports
import utils from './routes/utils'

// Create server
const server = express()
server.use(helmet())
server.use(express.static('public'))

// Get template HTML
const template = _.template(fs.readFileSync('./index.html'))

// Use routes
utils(server)

server.get('*', (req, res, next) => {
  const context = {}

  const body = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  )

  res.status(200).send(template({ body }))
})

server.listen(3000, () => console.log('listening on port 3000'))

server.use(express.static('public'))
