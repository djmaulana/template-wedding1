import React from 'react'
import { monte, montserrat } from '@/styles'
import Image from 'next/image'
import { Hr } from '.'

const Greetings = () => {
  return (
    <div className='relative mt-5 md:w-2/5 text-center text-gray-200'>
        <div className='w-[1px] h-[400px] absolute mt-5 border-l-[1px] ml-5'></div>
        <div className={monte.className}>
            <h1 className='text-[35px]' data-aos='fade-right'>Assalamualaikum</h1>
        </div>
        <div className={montserrat.className}>
            <p className='text-[12px] leading-tight mx-20 font-light' data-aos='zoom-in'>Dengan segala hormat.Kami mengundang Bapak/Ibu/Adik serta sanak saudara untuk hadir pada acara pernikahan kami:</p>
        </div>
        <div className='relative max-w-xs overflow-hidden bg-cover bg-center bg-no-repeat w-[150px] h-[200px] mt-5 mx-auto  '>
            <Image
            src='/woman.jpg'
            alt='woman'
            width={150}
            height={100}
            className='max-w-xs rounded-t-[70px]'    
            data-aos='zoom-in'       
            />
            
        </div>
        <h1 data-aos='zoom-in' className={monte.className} style={{marginTop: '10px', fontSize: '25px'}}>
            Neng Dewi Titin
        </h1>
        <div className={montserrat.className}>
            <p data-aos='zoom-in' className='text-[10px] mt-1 font-light'>Putri Bapak Mamat 
            <br /> & Ibu Cuch
            </p>
        </div>
        <p className={monte.className} style={{marginTop: '20px', marginBottom: '20px', fontSize: '20px'}}>&</p>
        <div className='relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat w-[150px] h-[200px] mt-5 mx-auto '>
            <Image
            src='/man.jpg'
            alt='man'
            width={150}
            height={200}
            className='max-w-xs rounded-t-[70px]' 
            data-aos='zoom-in'          
            />
        </div>
        <h1 data-aos='zoom-in' className={monte.className} style={{marginTop: '10px', fontSize: '25px'}}>
            Habibuloh
        </h1>
        <div className={montserrat.className} style={{marginBottom:'40px'}}>
            <p data-aos='zoom-in' className='text-[10px] mt-1 font-light'>Putra Bapak Salim 
            <br /> & Ibu Jojoh
            </p>
        </div>
        <Hr />
    </div>
  )
}

export default Greetings