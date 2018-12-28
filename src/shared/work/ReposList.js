import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const ReposList = ({ repos }) =>
  <div>
    {
      repos
      ? repos.length > 0
      ? <ul>
        {
            _.map(repos, (repo, i) => <li key={i}>{repo.name}</li>)
        }
      </ul>
      : <h3>no repos</h3>
      : <p>loading...</p>
      }
  </div>

ReposList.propTypes = {
  repos: PropTypes.array
}

export default ReposList
