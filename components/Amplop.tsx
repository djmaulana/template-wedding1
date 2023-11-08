import React from 'react'
import { monte, montserrat } from '@/styles'
import Image from 'next/image'
import { Hr } from '.'


const Amplop = () => {
  return (
    <div className='relative text-center text-gray-200 md:w-2/5'>
        <div className='absolute -bottom-48 z-50 -left-10'>
            <Image 
            src='/flower-mid-l.png'
            alt='flower'
            width={150}
            height={150}
            />
        </div>
        <div className={monte.className}>
            <h1 className='text-[40px] ' data-aos='fade-right'>Amplop Digital</h1>
        </div>
        <div className={montserrat.className}>
            <p className='text-[12px] font-light mx-10 leading-tight mt-3' data-aos='fade-in'>
            Doa Berkat Anda adalah anugerah yang sangat berarti bagi kami. Dan jika memberi merupakan ungkapan cinta Anda, Anda bisa memberikan hadiah secara cashless.
            </p>
        </div>
        <div className='w-80 mt-5 mx-auto h-44 bg-black bg-opacity-90 rounded-[20px] p-5' data-aos='zoom-in'>
            <div className='flex flex-row relative'>
                <div className='w-8 h-8 absolute rounded-full bg-red-500 opacity-90'></div>
                <div className='w-8 h-8 absolute rounded-full ml-5 bg-yellow-500 opacity-90'></div>
                <Image
                    src='/bca.png'
                    alt='bca'
                    width={90}
                    height={40}
                    className='absolute right-0 -mt-4'
                />
            </div>
            <div className='text-gray-200'>
                <h1 className='mt-2 text-sm -ml-16'>Master Card</h1>
                <p className='text-[11px] text-left mt-7'>Account Number</p>
                <p className='text-left' data-aos='fade-up'>12345 67890</p>
                <p className='text-left text-[14px] mt-3'>Romeo Montague</p>
            </div>
        </div>
        <div className='w-80 mt-3 mx-auto h-44 bg-black bg-opacity-90 rounded-[20px] p-5' data-aos='zoom-in'>
            <div className='flex flex-row relative'>
                <div className='w-8 h-8 absolute rounded-full bg-red-500 opacity-90'></div>
                <div className='w-8 h-8 absolute rounded-full ml-5 bg-yellow-500 opacity-90'></div>
                <Image
                    src='/bca.png'
                    alt='bca'
                    width={90}
                    height={40}
                    className='absolute right-0 -mt-4'
                />
            </div>
            <div className='text-gray-200'>
                <h1 className='mt-2 text-sm -ml-16'>Master Card</h1>
                <p className='text-[11px] text-left mt-7'>Account Number</p>
                <p className='text-left' data-aos='fade-up'>12345 67890</p>
                <p className='text-left text-[14px] mt-3'>Juliet Caputet</p>
            </div>
        </div>
        <Hr />
    </div>
  )
}

export default Amplop