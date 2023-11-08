import React from 'react'
import { monte, montserrat } from '@/styles'
import { Hr } from '.'
import Image from 'next/image'

const Message = () => {
  return (
    <div className='relative text-gray-200 text-center md:w-2/5'>
        <div className='absolute -bottom-40 -right-10'>
            <Image 
            src='/flower-mid.png'
            alt='flower'
            width={150}
            height={150}
            />
        </div>
        <div className={monte.className}>
            <h1 className='text-[40px]' data-aos='fade-right'>
                Send Message
            </h1>
        </div>
        <div className={montserrat.className}>
            <p className='mx-20 mt-2 text-[12px] font-light leading-tight' data-aos='fade-in'>
            Berikan Ucapan Salam dan Doa kepada Kedua Mempelai
            </p>
        </div>
        <div className='h-1/2 bg-white relative py-10 px-5 mt-5 mx-14 rounded-[25px]'>
            <form action="">
                <h1 className='text-black font-semibold '>Message Form</h1>
                <div className='flex flex-row text-black mt-5'>
                    <label className=" text-[12px] block mr-8 text-sm" data-aos='zoom-in'>Name</label>
                    <input name='name' id='name' required data-aos='zoom-in' type="text" className="w-full text-black border border-gray-400 rounded-[8PX] p-1" />
                </div>
                <div className='flex flex-row text-black mt-2'>
                    <label className=" text-[12px] block mr-3 text-sm" data-aos='zoom-in'>Message</label>
                    <textarea name='message' id='message' required data-aos='zoom-in' className="w-full text-black border border-gray-400 rounded-[8PX] p-2"></textarea>
                </div>
                <label className="flex items-center space-x-2 mt-5 text-gray-600">
                    <input
                    type="checkbox"
                    className="form-checkbox"
                    />
                    <span className='text-sm' data-aos='zoom-in'>Konfirmasi Kehadiran</span>
                </label>
                <button type="submit" data-aos='zoom-in' className="bg-[#823E37] text-sm text-gray-200 py-1 shadow-2xl px-4 mt-5 rounded-full">Submit</button>
            </form>
        </div>
        <Hr />
    </div>
  )
}

export default Message