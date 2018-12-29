import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { S3 } from '../../constants/S3'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 450px;
  overflow: hidden;

  @media(max-width: 500px) {
    height: 300px;
  }

  ${p => p.mob && `
    @media(min-width: ${p.mob}px){
      display: none;
      border: 1px solid red;
    }
  `}
`

const Container = styled.div`
  position: relative;
  width: 450px;
  height: 450px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media(max-width: 500px) {
    height: 300px;
    width: 300px;
  }
`

const Img = styled.img`
  height: 200px;
  @media(max-width: 500px) {
    height: 130px;
    width: 130px;
  }
`
const Circle = styled.img`
  width: 450px;
  height: 450px;
  position: absolute;
  top: -2px;
  left: -2px;
  transition: .25s;
  border: 1px dotted #555;
  margin: 1px;

  @media(max-width: 500px) {
    height: 300px;
    width: 300px;
  }
`

const Logo = ({ x, y, mob }) =>
  <Wrapper mob={mob}>
    <Container>
      <Img src={`${S3}/fuse logo only.svg`} />
      <Circle style={{ transform: `rotate(${(x + y) * 5 / 50}deg)` }} src={`${S3}/circle1-01.png`} />
      <Circle style={{ transform: `rotate(${(x + y) * -4 / 50}deg)` }} src={`${S3}/circle2-01.png`} />
      <Circle style={{ transform: `rotate(${(x + y) * 3 / 50}deg)` }} src={`${S3}/circle3-01.png`} />
    </Container>
  </Wrapper>

Logo.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  mob: PropTypes.number
}

export default Logo
