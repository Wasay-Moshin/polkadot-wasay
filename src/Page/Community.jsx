import React from 'react'
import Hero from '../Components/Elements/Community/Hero'
import Cards from '../Components/Elements/Community/Cards'
import Testnet from '../Components/Elements/Community/Testnet'
import Involved from '../Components/Elements/Community/Involved'
import Validator from '../Components/Elements/Community/Validator'
import Eta from '../Components/Elements/Community/Eta'
import Upcomming from '../Components/Elements/Community/Upcomming'
import Questions from '../Components/Elements/Community/Questions'
function Community() {
  return (
    <div>
      <Hero/>
      <Cards/>
      <Testnet/>
      <Involved/>
      <Validator/>
      <Eta/>
      <Upcomming/>
      <Questions/>
    </div>
  )
}

export default Community
