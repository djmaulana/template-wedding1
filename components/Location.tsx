import React from 'react'
import { monte, montserrat } from '@/styles'
import { Hr } from '.'
import Image from 'next/image'

const Location = () => {
  return (
    <div className='relative text-gray-200 text-center md:w-2/5 '>
        <div className='absolute -bottom-44 -left-12'>
            <Image 
            src='/flower-mid-l.png'
            alt='flower'
            width={150}
            height={150}
            />
        </div>
        <div className={monte.className}>
            <h1 className='text-[40px]' data-aos='fade-right'>
                Location
            </h1>
        </div>
        <div className='mt-10'>
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.3287527196694!2d108.19470787413036!3d-7.316917971945412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6f50d347e94c7f%3A0xd0cec9ea331a44d4!2sGedung%20Serbaguna%20Balekota%20Tasikmalaya!5e0!3m2!1sid!2sid!4v1699427708818!5m2!1sid!2sid" 
            width="320" 
            height="300" 
            className='mx-auto z-0'
            style={{border: '0px'}} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            data-aos='fade-in'
            > 
            </iframe>
        </div>
        <div className={montserrat.className}>
            <p className='text-[12px] leading-tight font-light mt-3 mx-12' data-aos='fade-in'>
            Jl. Letnan Harun No.1, Sukamulya, Kec. Bungursari, Kab. Tasikmalaya, Jawa Barat 46151
            </p>
        </div>
        <Hr />
    </div>
  )
}

export default Location