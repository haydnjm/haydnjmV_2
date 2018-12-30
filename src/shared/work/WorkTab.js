import React from 'react'
import styled from 'styled-components'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { S3 } from '../../constants/S3'

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;

  @media(max-width: 500px){
    flex-wrap: wrap;
  }
`

const Link = styled.a`
  text-decoration: none;
`

const Img = styled.img`
  max-width: 150px;
  max-height: 150px;
  width: 150px;
  height: 150px;
  margin-right: 30px;

  @media(max-width: 800px) {
    max-width: 100px;
    max-height: 100px;
    width: 100px;
    height: 100px;
  }
`

const Header = styled.h2`
  color: white;
`

const Icon = styled.img`
  width: 35px;
  height: 35px;
  margin: 10px;
  border-radius: 3px;
`

const Stack = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

const StackHeader = styled.h2`
  margin-right: 30px;
`

const P = styled.p`
  min-width: 275px;
`

const WorkTab = ({
  title,
  link,
  image,
  text,
  stack
}) =>
  <Container>
    <Link href={link} target='_blank' rel='noopener noreferrer'>
      <Img src={image} />
    </Link>
    <div>
      <Link href={link} target='_blank' rel='noopener noreferrer'>
        <Header>{title}</Header>
      </Link>
      <P>{text}</P>
      <Stack>
        <StackHeader>Stack:</StackHeader>
        {
          _.map(
            stack,
            (item, i) => <Icon key={i} src={`${S3}/icons/${item}.png`} />
          )
        }
      </Stack>
    </div>
  </Container>

WorkTab.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
  stack: PropTypes.array
}

export default WorkTab
