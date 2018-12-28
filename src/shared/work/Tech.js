import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  box-sizing: border-box;
  padding: 30px;
`

const Block = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0 20px;
  border-bottom: 1px solid #bbb;
`

const Img = styled.img`
  height: 60px;
  width: 60px;
  margin: 15px;
  border-radius: 3px;
`

const Tech = () =>
  <Container>
    <h1>Technology:</h1>
    <Block>
      <Img src='/images/icons/javascript.png' title='Javascript' />
      <Img src='/images/icons/react.png' title='React' />
      <Img src='/images/icons/redux.png' title='Redux' />
      <Img src='/images/icons/node.png' title='Node' />
      <Img src='/images/icons/php.png' title='PHP' />
      <Img src='/images/icons/laravel.png' title='Laravel' />
      <Img src='/images/icons/jquery.png' title='jQuery' />
    </Block>
    <Block>
      <Img src='/images/icons/mongo.png' title='MongoDB' />
      <Img src='/images/icons/mysql.png' title='MySQL' />
    </Block>
    <Block>
      <Img src='/images/icons/aws.png' title='AWS' />
      <Img src='/images/icons/lambda.png' title='Lambda' />
      <Img src='/images/icons/s3.png' title='S3' />
      <Img src='/images/icons/github.png' title='Github' />
      <Img src='/images/icons/stripe.png' title='Stripe' />
    </Block>
    <Block>
      <Img src='/images/icons/illustrator.png' title='Illustrator' />
      <Img src='/images/icons/photoshop.png' title='Photoshop' />
    </Block>
  </Container>

export default Tech
