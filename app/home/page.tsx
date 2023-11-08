import { Amplop, Footer, Galleries, Greetings, Hero, Location, Message, Savethedate } from '@/components'
import React from 'react'

const page = () => {
  return (
    <main className='overflow-hidden'>
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