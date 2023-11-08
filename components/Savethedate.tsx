import React from 'react'
import { monte, montserrat } from '@/styles'
import Image from 'next/image'

const Savethedate = () => {
  return (
    <div className='text-center text-gray-200 relative md:w-2/5 md:overflow-hidden'>
        <div className={monte.className}>
            <h1 className='text-[40px]'>Save The Date</h1>
        </div>
        <p className={montserrat.className} style={{fontSize:'10px', fontWeight: 'lighter'}}>
            05 November 2025
        </p>
        <div className='absolute -bottom-20 ml-24'>
            <Image 
            src='/line.png'
            alt='line'
            width={10}
            height={0}

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
                    <h1 className='text-[30px]'>
                        Akad Nikah
                    </h1>
                </div>
                <div className={montserrat.className} style={{marginTop: '5px'}}>
                    <p className='text-[12px] font-light'>
                        Pukul : 08:00 WIB
                    </p>
                    <p className='text-[11px] font-light'>
                        Alamat : Gedung Serba Guna
                    </p>
                </div>
                <div className={monte.className} style={{marginTop: '10px'}}>
                    <h1 className='text-[30px]'>
                        Resepsi
                    </h1>
                </div>
                <div className={montserrat.className} style={{marginTop: '5px'}}>
                    <p className='text-[12px] font-light'>
                        Pukul : 10:00 WIB
                    </p>
                    <p className='text-[11px] font-light'>
                        Alamat : Gedung Serba Guna
                    </p>
                </div>
            </div>
            <div className='absolute right-0 max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat w-[200px] bg-white h-[400px] mt-5 mx-auto rounded-tl-[200px] '>
            <Image
            src='/img-1.jpg'
            alt='img-1'
            width={700}
            height={0}
            className='max-w-xs'       
            />
        </div>
        </div>
        
    </div>
  )
}

export default Savethedate