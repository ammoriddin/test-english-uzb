import React from 'react'
import LessonCards from './lessoncards'
import red1 from '../assets/red1.webp'
import red2 from '../assets/red2.webp'
import red3 from '../assets/red3.webp'
import red4 from '../assets/red4.webp'
import red5 from '../assets/red5.webp'

export default function Reading() {
  return (
    <>
        <div>
            <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ed1c24]'>Reading</h1>
            <div className='container'>
                <div className='card-wrapper flex justify-start gap-x-[22px] items-center flex-wrap gap-y-5 pb-[20px]'>
                    <LessonCards img={red1} text={'A1 Reading Test'} path={'reading/a1'} />
                    <LessonCards img={red2} text={'A2 Reading Test'} path={'reading/a2'} />
                    <LessonCards img={red3} text={'B1 Reading Test'} path={'reading/b1'} />
                    <LessonCards img={red4} text={'B1+ Reading Test'} path={'reading/b1+'}/>
                    <LessonCards img={red5} text={'B2 Reading Test'} path={'reading/b2'}/>
                </div>
            </div>
        </div>
    </>
  )
}
