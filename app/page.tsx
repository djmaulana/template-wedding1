'use client'

import Image from 'next/image'
import { monte } from '@/styles'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';
import { useSearchParams  } from 'next/navigation';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("audio/music.mp3") : undefined
  );
  const searchParams = useSearchParams()
  let namaTamu = searchParams.get('guest')
  if (namaTamu != null){
    namaTamu = namaTamu.replace(/-/g, ' ');
  }
  useEffect(() => {
    audio.current?.loop
  })

  const handelMusic = () => {
    if (isPlaying) {
      audio.current?.pause();
    } else {
      audio.current?.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <main className="relative flex transform-gpu min-h-screen md:w-2/5 bg-black overflow-hidden">
      <div className='flex z-0 inset-0 flex-col justify-center w-screen text-center h-[100vh]'>
        <Image 
        src='/img-4.jpg'
        alt='Homepage'
        width={1500}
        height={500}
        className='bg-cover bg-no-repeat bg-center scale-125 saturate-50'
        />
        <div className='absolute -top-5 -left-5'>
          <Image 
          src='/flower-up.png'
          alt='flower'
          width={150}
          height={150}
          
          />
        </div>
        <div className='absolute -bottom-5 -right-5'>
          <Image 
          src='/flower-down.png'
          alt='flower'
          width={150}
          height={150}
          />
        </div>
        <div className='absolute bottom-0 left-0'>
          <Image 
          src='/batik.png'
          alt='flower'
          width={150}
          height={150}
          />
        </div>
        <div className='absolute z-10 bg-black bg-opacity-50 w-full h-full  text-gray-200 left-0 right-0'>
          <div className='top-1/2 translate-y-1/2'>
            <div className={monte.className} style={{'fontSize': 30}}>
              <h1 className='mt-5 text-[45px]'>The Wedding of</h1>
              <h1 className=''>Neng Dewi Titin</h1>
              <h1 className='text-[20px]'>&</h1>
              <h1>Habibuloh</h1>
            </div>
            <p className='mt-10 text-sm mb-5'>Kepada Bapak/Ibu/Saudara/i</p>
            <h2 className='capitalize '>{namaTamu}</h2>
            <Link
            href='/home'
            >
              <button
              onClick={handelMusic} 
              className='bg-[#823E37] mt-20 shadow-xl text-sm font-light p-2 rounded-[10px]'>
                Buka Undangan
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}
