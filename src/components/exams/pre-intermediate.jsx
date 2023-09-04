import React from 'react'
import LessonCards from '../lessoncards'
import p1 from '../../assets/exams/pre-intermediate/p1.webp'
import p2 from '../../assets/exams/pre-intermediate/p2.webp'
import p3 from '../../assets/exams/pre-intermediate/p3.jpg'
import p4 from '../../assets/exams/pre-intermediate/p4.webp'

export default function ExmPreAdvenced() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#50af31]'>B1 PRELIMINARY (PET)</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={p1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={p2} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={p3} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={p4} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
            </div>
        </div>
    </div>
  )
}