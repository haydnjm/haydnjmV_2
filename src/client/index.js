/*
*
* Client index to mount react app to DOM node, as with non SSR app
*
*/

import React from 'react'
import { hydrate } from 'react-dom'
import ClientEntry from './ClientEntry'

hydrate(<ClientEntry />, document.getElementById('app'))
