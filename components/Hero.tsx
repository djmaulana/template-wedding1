'use client'

import { monte } from '@/styles'
import Image from 'next/image'
import React , {useState, useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    })
    const target = new Date("12/23/2023 08:00:00");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d && h && m && s < 0){
        setDays(0)
        setHours(0)
        setMinutes(0)
        setSeconds(0)
      }

    }, 1000);

    return () => clearInterval(interval);
  }, []);


  
  
  return (
    <div className='relative flex min-h-screen md:w-2/5 md:overflow-hidden z-0 inset-0 flex-col justify-center w-screen text-center '>
    <div className='w-full'>
      <Image 
      src='/img-3.jpg'
      alt='Homepage'
      width={1500}
      height={100}
      className='bg-cover bg-no-repeat bg-center scale-125'
      />
    </div>
    
    <div className='absolute z-20 -top-5 -left-5'>
      <Image 
      src='/flower-up.png'
      alt='flower'
      width={150}
      height={150}
      />
    </div>
    <div className='absolute z-20 -bottom-24 -right-10'>
      <Image 
      src='/flower-mid.png'
      alt='flower'
      width={150}
      height={150}
      />
    </div>
    <div className='absolute z-20 top-0 right-0'>
      <Image 
      src='/batik-2.png'
      alt='flower'
      width={100}
      height={100}
      />
    </div>
    <div className=' bottom-0 left-0 z-20 absolute'>
      <button className='w-8 h-8 hover:cursor-pointer bg-white rounded-full ml-5 p-2 mb-5 shadow-xl'>
        <Image 
        src='/ic-music.png'
        alt='music'
        width={50}
        height={50}
        />
      </button>
    </div>
    <div className='absolute z-10 text-gray-200 bg-black bg-opacity-50 w-full h-[90vh] left-0 right-0'>
      <div className='top-1/2 translate-y-1/2'>
        <div className={monte.className} style={{'fontSize': 35}}>
          <h1 className='text-[45px]'>The Wedding of</h1>
          <h1>Neng Dewi Titin</h1>
          <h1 className='text-[20px]'>&</h1>
          <h1>Habibuloh</h1>
        </div>
        <div className='mt-14'>
          <p className='text-[12px]'>Sabtu, 23 Desember 2023</p>
          <div className='mt-5 grid grid-cols-4 grid-flow-row gap-2 mx-10'>
            <div className='bg-[#823E37] py-1 rounded-[10px]'>
              <h1 className='text-[13px]'>{days}</h1>
              <p className='text-[10px]'>Days</p>
            </div>
            <div className='bg-[#823E37] py-1 rounded-[10px]'>
              <h1 className='text-[13px]'>{hours}</h1>
              <p className='text-[10px]'>Hours</p>
            </div>
            <div className='bg-[#823E37] py-1 rounded-[10px]'>
              <h1 className='text-[13px]'>{minutes}</h1>
              <p className='text-[10px]'>Minutes</p>
            </div>
            <div className='bg-[#823E37] py-1 rounded-[10px]'>
              <h1 className='text-[13px]'>{seconds}</h1>
              <p className='text-[10px]'>Seconds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Hero