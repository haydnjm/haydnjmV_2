import React from 'react'
import styled from 'styled-components'

import { S3 } from '../../constants/S3'

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
      <Img src={`${S3}/icons/javascript.png`} title='Javascript' />
      <Img src={`${S3}/icons/react.png`} title='React' />
      <Img src={`${S3}/icons/redux.png`} title='Redux' />
      <Img src={`${S3}/icons/node.png`} title='Node' />
      <Img src={`${S3}/icons/php.png`} title='PHP' />
      <Img src={`${S3}/icons/laravel.png`} title='Laravel' />
      <Img src={`${S3}/icons/jquery.png`} title='jQuery' />
    </Block>
    <Block>
      <Img src={`${S3}/icons/mongo.png`} title='MongoDB' />
      <Img src={`${S3}/icons/mysql.png`} title='MySQL' />
    </Block>
    <Block>
      <Img src={`${S3}/icons/aws.png`} title='AWS' />
      <Img src={`${S3}/icons/lambda.png`} title='Lambda' />
      <Img src={`${S3}/icons/s3.png`} title='S3' />
      <Img src={`${S3}/icons/github.png`} title='Github' />
      <Img src={`${S3}/icons/stripe.png`} title='Stripe' />
    </Block>
    <Block>
      <Img src={`${S3}/icons/illustrator.png`} title='Illustrator' />
      <Img src={`${S3}/icons/photoshop.png`} title='Photoshop' />
    </Block>
  </Container>

export default Tech
