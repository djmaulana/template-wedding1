'use client'

import Image from 'next/image'
import { monte } from '@/styles'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("audio/music.mp3") : undefined
  );
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
    <main className="relative flex min-h-screen md:w-2/5 bg-black overflow-hidden">
      <div className='flex z-0 inset-0 flex-col justify-center w-screen text-center h-[100vh]'>
        <Image 
        src='/homepage.jpg'
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
        <div className='absolute z-10 text-white  left-0 right-0'>
          <div className={monte.className} style={{'fontSize': 40}}>
            <h1 className=''>The Wedding of</h1>
            <h1>Juliet</h1>
            <h1>&</h1>
            <h1>Romeo</h1>
          </div>
          <p className='mt-20 text-sm mb-5'>Kepada Bapak/Ibu/Saudara/i</p>
          <h2>Nama Tamu</h2>
          <Link
          href='/home'
          >
            <button
            onClick={handelMusic} 
            className='bg-[#823E37] shadow-xl text-sm font-light mt-20 p-2 rounded-[10px]'>
              Buka Undangan
            </button>
          </Link>
        </div>
      </div>
    </main>
  )
}
