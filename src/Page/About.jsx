import React from 'react'
import Hero from '../Components/Elements/About/Hero'
import Mission from '../Components/Elements/About/Mission'
import Building from '../Components/Elements/About/Building'
import Founders from '../Components/Elements/About/Founders'
import Card from '../Components/Elements/About/Card'
import Press from '../Components/Elements/About/Press'
import Intouch from '../Components/Elements/About/Intouch'
import Blog from '../Components/Elements/About/Blog'
import Involved from '../Components/Elements/About/Involved'
function About() {
  return (
    <div>
      <Hero/>
      <Mission/>
      <Building/>
      <Founders/>
      <Card/>
      <Press/>
      <Intouch/>
      <Blog/>
      <Involved/>
    </div>
  )
}

export default About
