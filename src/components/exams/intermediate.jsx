import React from 'react'
import LessonCards from '../lessoncards'
import i1 from '../../assets/exams/soon.webp'

export default function ExmIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#50af31]'>B2 FIRST (FCE)
</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={i1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
            </div>
        </div>
    </div>
  )
}