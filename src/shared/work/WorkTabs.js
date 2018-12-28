import React from 'react'
import styled from 'styled-components'
import WorkTab from './WorkTab'

const Container = styled.div`

`

const WorkTabs = () =>
  <Container>
    <WorkTab
      title='Intique'
      link='https://intique.net'
      text={`Intique is a fully integrated online selling platform for independent sellers of
        vintage, mid-century and antique furniture. Sellers create a personalised boutique
        to sell their items while promoting their brand.`}
      image='https://s3.eu-west-2.amazonaws.com/intique-images/icons/grid-no-background-01.png'
      stack={['react', 'redux', 'node', 'mongo', 'stripe', 'aws']}
    />
    <WorkTab
      title='Damflask Consulting'
      link='https://damflask-consulting.com'
      text={`Damflask Consulting is a Sheffield based business consulting and coaching network.
        We work with individuals and organisations to improve the quality of their thinking and
        communication, catalysing personal insight, growth, interdependence and fulfilment.`}
      image='/images/logo light.svg'
      stack={['react', 'redux', 'node']}
    />
    <WorkTab
      title='Timeline Interiors'
      link='https://timeline-interiors.com'
      text={`Timeline Vintage is a homegrown modern day company with a penchant for all things
        old school, vintage and retro; specialising in furniture but with a growing interest
        in a wider range of merchandise including clothing, watches and bicycles.`}
      image='/images/logo-body4.svg'
      stack={['laravel', 'jquery', 'mysql', 'php']}
    />
  </Container>

export default WorkTabs
