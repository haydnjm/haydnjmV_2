import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { Route, withRouter } from 'react-router-dom'
import routes from './routes'

const Container = styled.div`
  font-family: Rajdhani;
  color: white;
  height: 100vh;
`

const App = ({ location }) =>
  <Container>
    {
      _.map(routes, ({ component: C, exact, path, ...rest }, i) =>
        <Route
          key={i}
          path={path}
          exact={exact}
          render={(props) => <C {...props} {...rest} />}
          />
      )
    }
  </Container>

App.propTypes = {
  location: PropTypes.object
}

export default withRouter(App)
