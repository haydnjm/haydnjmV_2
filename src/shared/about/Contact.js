import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const L = styled.a`
  &:link {
    text-decoration: none;
  }
  color: white;
  font-size: 3rem;
  transition: 0.3s;
  &:hover {
    color: #aaa;
  }
`

const Details = styled.div`
  flex: 1;
  width: 95%;
  max-width: 550px;
  margin: auto;
`

const DetailRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0 20px;
  font-size: 1.25rem;
`

const H = styled.h2`
  text-align: center;
`

const Wrapper = styled.div`
  margin-top: 50px;
`

const Contact = () =>
  <Wrapper>
    <H>Contact</H>
    <Container>
      <Details>
        <DetailRow>
          <div>Tel:</div>
          <div>+447505 481159</div>
        </DetailRow>
        <DetailRow>
          <div>Email:</div>
          <div>haydn@haydnjm.com</div>
        </DetailRow>
        <DetailRow>
          <L href='https://www.linkedin.com/in/haydn-morris-18b1b3a5/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-linkedin' />
          </L>
          <L href='https://medium.com/@haydnjmorris' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-medium-m' />
          </L>
          <L href='https://www.instagram.com/haydnjm/' target='_blank' rel='noopener noreferrer'>
            <i className='fab fa-instagram' />
          </L>
        </DetailRow>
      </Details>
    </Container>
  </Wrapper>

export default Contact
