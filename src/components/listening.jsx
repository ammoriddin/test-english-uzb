import React from 'react'
import LessonCards from './lessoncards'
import lis1 from '../assets/lis1.webp'
import lis2 from '../assets/lis2.webp'
import lis3 from '../assets/lis3.webp'
import lis4 from '../assets/lis4.webp'
import lis5 from '../assets/lis5.webp'

export default function Listening() {
  return (
    <>
        <div>
            <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#fecc00]'>Listening</h1>
            <div className='container'>
                <div className='card-wrapper flex justify-start gap-x-[22px] items-center flex-wrap gap-y-5 pb-[20px]'>
                    <LessonCards img={lis1} text={'A1 Listening Tests'} path={'listening/a1'} />
                    <LessonCards img={lis2} text={'A2 Listening Tests'} path={'listening/a2'} />
                    <LessonCards img={lis3} text={'B1 Listening Tests'} path={'listening/b1'} />
                    <LessonCards img={lis4} text={'B1+ Listening Tests'} path={'listening/b1+'} />
                    <LessonCards img={lis5} text={'B2 Listening Tests'} path={'listening/b2'} />
                </div>
            </div>
        </div>
    </>
  )
}
