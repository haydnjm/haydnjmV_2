/*
*
* Client index to mount react app to DOM node, as with non SSR app
*
*/

import React from 'react'
import { hydrate } from 'react-dom'
import ClientEntry from './ClientEntry'
import '../shared/styles/animations.css'
import '../shared/styles/normalise.css'

hydrate(<ClientEntry />, document.getElementById('app'))
