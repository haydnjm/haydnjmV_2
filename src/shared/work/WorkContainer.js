import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SlidePanel from '../common/SlidePanel'

// import ReposList from './ReposList'
import WorkTabs from './WorkTabs'
import Tech from './Tech'

class WorkContainer extends Component {
  constructor (props) {
    super(props)

    let repos
    if (__isClient__) { //eslint-disable-line
      repos = window.__INITIAL_DATA__
      delete window.__INITIAL_DATA__
    } else {
      repos = this.props.staticContext.initialData
    }

    this.state = { repos: repos }
  }

  componentDidMount = () => {
    if (!this.state.repos) {
      this.fetchRepos()
    }
  }

  fetchRepos = () => this.props.fetchInitialData()
    .then(data => this.setState({ repos: data }))

  render () {
    return (
      <SlidePanel dir='left' title='WORK'>
        <div>
          <WorkTabs />
          <Tech />
        </div>
      </SlidePanel>
    )
  }
}

WorkContainer.propTypes = {
  staticContext: PropTypes.object,
  fetchInitialData: PropTypes.func
}

export default WorkContainer
