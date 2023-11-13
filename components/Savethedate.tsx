import React from 'react'
import { monte, montserrat } from '@/styles'
import Image from 'next/image'

const Savethedate = () => {
  return (
    <div className='text-center text-gray-200 relative md:w-2/5 md:overflow-hidden'>
        <div className={monte.className}>
            <h1 className='text-[40px]' data-aos='fade-right'>Save The Date</h1>
        </div>
        <p data-aos='fade-in' className={montserrat.className} style={{fontSize:'10px', fontWeight: 'lighter'}}>
            23 Desember 2023
        </p>
        <div className='absolute -bottom-20 ml-24'>
            <Image 
            src='/line.png'
            alt='line'
            width={10}
            height={0}
            data-aos='fade-up'
            />
        </div>
        <div className='absolute z-10 -top-20 -left-8'>
            <Image 
            src='/flower-mid-l.png'
            alt='flower'
            width={150}
            height={150}
            
            />
        </div>
        <div className='grid grid-cols-2 relative'>
            <div className=' h-[420px] flex flex-col justify-center items-center'>
                <div className={monte.className}>
                    <h1 className='text-[30px]' data-aos='fade-in'>
                        Akad Nikah
                    </h1>
                </div>
                <div className={montserrat.className} style={{marginTop: '5px'}} >
                    <p className='text-[12px] font-light' data-aos='fade-in'>
                        Pukul : 09:00 WIB
                    </p>
                    <p className='text-[11px] font-light mx-2' data-aos='fade-in'>
                        Alamat : Kediaman Mempelai Wanita
                    </p>
                </div>
                <div className={monte.className} style={{marginTop: '10px'}} data-aos='fade-in'>
                    <h1 className='text-[30px]'>
                        Resepsi
                    </h1>
                </div>
                <div className={montserrat.className} style={{marginTop: '5px'}}>
                    <p className='text-[12px] font-light' data-aos='fade-in'>
                        Pukul : 11:00 WIB
                    </p>
                    <p className='text-[11px] font-light' data-aos='fade-in'>
                        Alamat : Kediaman Mempelai Wanita
                    </p>
                </div>
            </div>
            <div className='absolute right-0 max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat w-[200px]  h-[400px] mt-5 mx-auto  '>
            <Image
            src='/img-4.jpg'
            alt='img-1'
            width={700}
            height={0}
            className='max-w-xs rounded-tl-[150px]'
            data-aos='fade-left'       
            />
        </div>
        </div>
        
    </div>
  )
}

export default Savethedate