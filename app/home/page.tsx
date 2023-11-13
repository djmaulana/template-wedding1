import { Amplop, Footer, Galleries, Greetings, Hero, Location, Message, Savethedate } from '@/components'
import React, { useState } from 'react'

const page = () => {

  return (
    <main className='overflow-hidden'>
      <div className='pattern'></div>
      <Hero />
      <Greetings />
      <Savethedate />
      <Galleries />
      <Location />
      <Message />
      <Amplop />
      <Footer />
    </main>
  )
}


export default page