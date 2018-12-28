import axios from 'axios'

export const fetchInitialData = () =>
  axios.get('https://api.github.com/users/haydnjm/repos')
    .then(({ data }) => data.map(d => ({ name: d.name })))
