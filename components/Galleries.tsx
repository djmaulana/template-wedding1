import React from 'react'
import { monte, montserrat } from '@/styles'
import Image from 'next/image'
import { Hr } from '.'

const Galleries = () => {
  return (
    <div className='relative text-gray-200 md:w-2/5 '>
        <div className='absolute -bottom-40 -right-10'>
            <Image 
            src='/flower-mid.png'
            alt='flower'
            width={150}
            height={150}
            />
        </div>
        <div className={monte.className} >
            <h1 className='text-[40px] text-right mr-16 mt-10' data-aos='fade-left'>
                Our Galleries
            </h1>
        </div>
        <div className='grid grid-cols-2 gap-0 mt-10 mx-auto'>
            <div className='w-full '>
                <Image 
                src='/img-2.jpg'
                alt='img'
                width={250}
                height={258}
                className='w-full'
                data-aos='fade-right'
                />
                <Image 
                src='/img-4.jpg'
                alt='img'
                width={250}
                height={114}
                className='w-full'
                data-aos='fade-out'
                />
             
                 <Image 
                src='/man.jpg'
                alt='img'
                width={250}
                height={114}
                className='w-full'
                data-aos='fade-in'
                />
            </div>
            <div className='w-full'>
                <Image 
                src='/img-3.jpg'
                alt='img'
                width={250}
                height={114}
                className='w-full'
                data-aos='fade-left'
                />
                <Image 
                src='/woman.jpg'
                alt='img'
                width={250}
                height={114}
                className='w-full'
                data-aos='fade-up'
                />
                   <Image 
                src='/img-1.jpg'
                alt='img'
                width={250}
                height={114}
                className='w-full'
                data-aos='fade-in'
                />
               
            </div>
        </div>
        <Hr />
    </div>
  )
}

export default Galleries