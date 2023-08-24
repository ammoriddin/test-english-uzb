import React from 'react'
import LessonCards from './lessoncards'
import writing1 from '../assets/writing1.webp'
import writing2 from '../assets/writing2.webp'
import writing3 from '../assets/writing3.webp'
import writing4 from '../assets/writing4.webp'
import writing5 from '../assets/writing5.webp'

export default function Writing() {
  return (
    <>
        <div>
            <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#a84d98]'>Writing</h1>
            <div className='container'>
                <div className='card-wrapper flex justify-start gap-x-[22px] items-center flex-wrap gap-y-5 pb-[20px]'>
                    <LessonCards img={writing1} text={'A1 Writing Exercises and Test'} />
                    <LessonCards img={writing2} text={'A2 Writing Exercises and Test'} />
                    <LessonCards img={writing3} text={'B1 Writing Exercises and Test'} />
                    <LessonCards img={writing4} text={'B1+ Writing Exercises and Test'} />
                    <LessonCards img={writing5} text={'B2 Writing Exercises and Test'} />
                </div>
            </div>
        </div>
    </>
  )
}
