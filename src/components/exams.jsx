import React from 'react'
import LessonCards from './lessoncards'
import exams1 from '../assets/exams1.jpg'
import exams2 from '../assets/exams2.jpg'
import exams3 from '../assets/exams3.jpg'
import exams4 from '../assets/exams4.jpg'
import exams5 from '../assets/exams5.webp'

export default function Exams() {
  return (
    <>
        <div>
            <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#50af31]'>Exams</h1>
            <div className='container'>
                <div className='card-wrapper flex justify-start gap-x-[22px] items-center flex-wrap gap-y-5 pb-[20px]'>
                    <LessonCards img={exams1} text={'A2 Key (KET)'} />
                    <LessonCards img={exams2} text={'B1 Prelminary'} />
                    <LessonCards img={exams3} text={'B2 First (FCE)'} />
                    <LessonCards img={exams4} text={'IELTS'} />
                    <LessonCards img={exams5} text={'TOEFL IBT'} />
                </div>
            </div>
        </div>
    </>
  )
}
