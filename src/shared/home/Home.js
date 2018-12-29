import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import _ from 'lodash'

import Logo from './Logo'

import { Flexbox } from '../styles/components/blocks'
import { S3 } from '../../constants/S3'

const Container = styled(Flexbox)`
  background-color: #111;
  color: white;
  height: 100%;
  max-width: 100vw;
  position: relative;
`

const Title = styled.img`
  height: 150px;
  display: block;
  margin: 0 auto 0;

  @media(max-width: 700px) {
    height: 100px;
  }

  @media(max-width: 400px) {
    height: 75px;
  }
`

const L = styled(Link)`
  text-decoration: none;
  color: white;
`

const H = styled.h1`
  font-size: 2.75rem;
  transition: .3s;

  &:hover {
    color: #aaa;
  }
`

class Home extends Component {
  state = {
    initial: [0, 0],
    position: [0, 0]
  }

  savePosition = (x, y) => this.setState({ position: [x, y] })

  setPosition = _.throttle((x, y) => this.savePosition(x, y), 100)

  setInitialMouse = (e) => this.setState({ initial: [e.clientX, e.clientY] })

  render () {
    const { initial, position } = this.state

    const x = initial[0] - position[0]
    const y = initial[1] - position[1]

    return (
      <Container
        onMouseEnter={this.setInitialMouse}
        onMouseMove={(e) => this.setPosition(e.clientX, e.clientY)}
        direction='column'
        >
        <Flexbox break={750} stretch justify={'space-around'}>
          <L to='/work'><H>WORK</H></L>
          <Logo x={x} y={y} />
          <L to='/about'><H>ABOUT</H></L>
        </Flexbox>
        <Logo x={x} y={y} mob={750} />
        <Title src={`${S3}/home-title-01.png`} />
        <Flexbox mob break={750} stretch justify='space-around'>
          <L to='/about'><H>ABOUT</H></L>
          <L to='/work'><H>WORK</H></L>
        </Flexbox>
      </Container>
    )
  }
}

export default Home
