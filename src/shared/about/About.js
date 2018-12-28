import React from 'react'
import SlidePanel from '../common/SlidePanel'

import Info from './Info'
import Contact from './Contact'

const About = () =>
  <SlidePanel dir='right' title='ABOUT'>
    <div>
      <Info />
      <Contact />
    </div>
  </SlidePanel>

About.propTypes = {
}

export default About
