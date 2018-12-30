import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Transition, CSSTransition } from 'react-transition-group'
import { withRouter } from 'react-router-dom'

const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
  background-color: rgba(30,30,30,0.98);
  position: absolute;
  top: 0;
  ${p => p.dir}: 0;
  width: 60%;
  padding: 20px;
  box-sizing: border-box;

  @media(max-width: 1200px) {
    width: 75%;
  }

  @media(max-width: 900px) {
    width: 85%;
  }

  @media(max-width: 800px) {
    width: 100%;
  }
`

const Back = styled.span`
  position: fixed;
  top: 15px;
  ${p => p.dir === 'left' ? 'left: 15px' : 'right: 25px'};
  font-size: 1.2rem;
  border-bottom: 2px solid white;
  padding: 2px 10px 2px;
  margin-${p => p.dir}: 0px;
  cursor: pointer;
  transition: .3s;
  background-color: rgba(30,30,30,0.8);
  border-radius: 3px;

  &:hover {
    color: #aaa;
    border-bottom: 2px solid #aaa;
  }
`

const Title = styled.h1`
  text-align: center;
`

class SlidePanel extends Component {
  state = { appear: true }

  back = () => {
    this.setState({ appear: false })
    setTimeout(() => this.props.history.push('/'), 300)
  }

  render () {
    const {
      location,
      children,
      dir,
      title
    } = this.props

    const { appear } = this.state

    return (
      <Transition
        component='div'
        appear
        timeout={{
          enter: 300,
          exit: 300
        }}
        >
        <CSSTransition
          key={location.pathname.split('/')[1] || '/'}
          timeout={{
           enter: 300,
           exit: 300
          }}
          classNames={{
           appear: `${dir}-appear`,
           appearActive: `${dir}-appear-active`,
           enter: `${dir}-enter`,
           enterActive: `${dir}-enter-active`,
           enterDone: `${dir}-enter-done`,
           exit: `${dir}-exit`,
           exitActive: `${dir}-exit-active`,
           exitDone: `${dir}-exit-done`
          }}
          appear
          in={appear}
          unmountOnExit
          >
          <Container dir={dir}>
            <Back onClick={this.back} dir={dir}>back</Back>
            <Title>{title}</Title>
            {children}
          </Container>
        </CSSTransition>
      </Transition>
    )
  }
}

SlidePanel.propTypes = {
  location: PropTypes.object,
  history: PropTypes.object,
  children: PropTypes.object,
  dir: PropTypes.string,
  title: PropTypes.string
}

export default withRouter(SlidePanel)
