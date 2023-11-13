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
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3956.0085194490766!2d108.3046149750017!3d-7.464307792547199!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjcnNTEuNSJTIDEwOMKwMTgnMjUuOSJF!5e0!3m2!1sid!2sid!4v1699863980298!5m2!1sid!2sid"
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
            Kp. Anteghilir Rt. 14 Rw. 01 Ds. Malatisuka Kec. Gunungtanjung Tasikmalaya
            </p>
        </div>
        <Hr />
    </div>
  )
}

export default Location
