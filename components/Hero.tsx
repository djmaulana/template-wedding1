import { monte } from '@/styles'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative flex min-h-screen md:w-2/5 md:overflow-hidden z-0 inset-0 flex-col justify-center w-screen text-center h-[100vh]'>
    <Image 
    src='/hero.jpg'
    alt='Homepage'
    fill
    className='bg-cover bg-no-repeat bg-center h-full w-full'
    />
    <div className='absolute -top-5 -left-5'>
      <Image 
      src='/flower-up.png'
      alt='flower'
      width={150}
      height={150}
      />
    </div>
    <div className='absolute -bottom-24 -right-10'>
      <Image 
      src='/flower-mid.png'
      alt='flower'
      width={150}
      height={150}
      />
    </div>
    <div className='absolute top-0 right-0'>
      <Image 
      src='/batik-2.png'
      alt='flower'
      width={100}
      height={100}
      />
    </div>
    <div className=' bottom-0 left-0 absolute'>
      <div className='w-8 h-8 bg-white rounded-full ml-5 p-2 mb-5 shadow-xl'>
        <Image 
        src='/ic-music.png'
        alt='music'
        width={50}
        height={50}
        />
      </div>
    </div>
    <div className='absolute z-10 text-white  left-0 right-0'>
      <div className={monte.className} style={{'fontSize': 35}}>
        <h1 className=''>The Wedding of</h1>
        <h1>Juliet</h1>
        <h1>&</h1>
        <h1>Romeo</h1>
      </div>
      <div className='mt-14'>
        <p className='text-[12px]'>Sabtu, 05 November 2025</p>
        <div className='mt-5 grid grid-cols-4 grid-flow-row gap-2 mx-10'>
          <div className='bg-[#823E37] py-1 rounded-[10px]'>
            <h1 className='text-[13px]'>25</h1>
            <p className='text-[10px]'>Days</p>
          </div>
          <div className='bg-[#823E37] py-1 rounded-[10px]'>
            <h1 className='text-[13px]'>05</h1>
            <p className='text-[10px]'>Hours</p>
          </div>
          <div className='bg-[#823E37] py-1 rounded-[10px]'>
            <h1 className='text-[13px]'>10</h1>
            <p className='text-[10px]'>Minutes</p>
          </div>
          <div className='bg-[#823E37] py-1 rounded-[10px]'>
            <h1 className='text-[13px]'>20</h1>
            <p className='text-[10px]'>Seconds</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero