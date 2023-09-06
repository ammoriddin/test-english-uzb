// import React from 'react'
import LessonCards from './lessoncards'
import grammer1 from '../assets/grammer1.webp'
import grammer2 from '../assets/grammer2.webp'
import grammer3 from '../assets/grammer3.webp'
import grammer4 from '../assets/grammer4.jpg'
import grammer5 from '../assets/grammer5.webp'
import grammer6 from '../assets/grammer6.webp'

export default function Grammer() {
  return (
    <>
        <div>
            <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>Grammar</h1>
            <div className='container'>
                <div className='card-wrapper flex justify-between items-center flex-wrap gap-y-5 pb-[20px]'>
                    <LessonCards img={grammer1} text={'A1 Gramatika bo\'yicha darslar va mashqlar'} path={'grammer/a1'}/>
                    <LessonCards img={grammer2} text={'A2 Gramatika bo\'yicha darslar va mashqlar'} path={'grammer/a2'}/>
                    <LessonCards img={grammer3} text={'B1 Gramatika bo\'yicha darslar va mashqlar'} path={'grammer/b1'}/>
                    <LessonCards img={grammer4} text={'B1+ Gramatika bo\'yicha darslar va mashqlar'} path={'grammer/b1+'} />
                    <LessonCards img={grammer5} text={'B2 Gramatika bo\'yicha darslar va mashqlar'} path={'grammer/b2'} />
                    <LessonCards img={grammer6} text={'Gramatika mavzularining jadvali - Barcha darajalar'} path={'grammer/contents'} />
                </div>
            </div>
        </div>
    </>
  )
}
