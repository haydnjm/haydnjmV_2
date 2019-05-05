import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  width: 95%;
  max-width: 550px;
  margin: auto;
  line-height: 2;
`

const Info = () =>
  <Container>
    <p>
      I am a web developer based in Amsterdam, NL. I create bespoke web solutions
      for small businesses.
    </p>
    <p>
      My goal is to provide new businesses with a platform on which they can take their
      enterprise to the next level. Using the latest tools and libraries I build creative
      and robust solutions.
    </p>
  </Container>

export default Info
