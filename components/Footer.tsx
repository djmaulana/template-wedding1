import React from 'react'
import { monte, montserrat } from '@/styles'
import Image from 'next/image'
import { Hr } from '.'


const Footer = () => {
  return (
    <div className='relative bg-black text-center md:w-2/5 md:overflow-hidden text-gray-200 p-10'>
        <div className='ml-14 mt-10 h-[200] w-[160] rounded-bl-[70px] relative max-w-xs overflow-hidden bg-cover bg-[50%] bg-no-repeat'>
            <Image 
            src='/img-2.jpg'
            alt='footer'
            width={200}
            height={150}
            className='max-w-xs'
            data-aos='zoom-in'
            />
        </div>
        <Hr />
        <div className={montserrat.className}>
            <p data-aos='zoom-in' className='text-[12px] font-light mx-10'>
            Suatu kehormatan dan kebahagiaan bagi kami, apabila bapak ibu bersedia hadir dan memberikan restunya. Atas kehadiran dan berkahnya kami ucapkan terima kasih.
            </p>
        </div>
        <div className={monte.className}>
            <h1 data-aos='zoom-in' className='text-[25px] mt-5'>
                Neng Dewi Titin
                <br />&
                <br /> Habibuloh
            </h1>
        </div>
        <div className={montserrat.className} style={{fontSize: '10px', fontWeight: 'lighter', marginTop: '30px'}}>
            <p>
            Made with ❤ 
            <br />
            ©2023 Neo Industries, Inc. All rights reserved.
            </p>
        </div>
    </div>
  )
}

export default Footer
//  w-[150px] h-[200px] mt-5 mx-auto rounded-t-[70px]