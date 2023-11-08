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
            <h1 className='text-[40px] text-right mr-16 mt-10'>
                Our Galleries
            </h1>
        </div>
        <div className='grid grid-cols-2  mt-10 '>
            <div className=' '>
                <Image 
                src='/img-2.jpg'
                alt='img'
                width={250}
                height={258}
                className=''
                />
                <Image 
                src='/img-4.jpg'
                alt='img'
                width={250}
                height={114}
                />
                <Image 
                src='/img-7.jpg'
                alt='img'
                width={250}
                height={114}
                />
            </div>
            <div className=''>
                <Image 
                src='/img-3.jpg'
                alt='img'
                width={250}
                height={114}
                />
                <Image 
                src='/img-5.jpg'
                alt='img'
                width={250}
                height={114}
                />
                <Image 
                src='/img-6.jpg'
                alt='img'
                width={250}
                height={114}
                />
            </div>
        </div>
        <Hr />
    </div>
  )
}

export default Galleries