import Home from './home/Home'

import About from './about/About'

import WorkContainer from './work/WorkContainer'
import { fetchInitialData as workFetchInitialData } from './work/api'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/work',
    component: WorkContainer,
    fetchInitialData: () => workFetchInitialData()
  }
]

export default routes
