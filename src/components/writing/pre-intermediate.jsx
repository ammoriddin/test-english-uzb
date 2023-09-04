import React from 'react'
import LessonCards from '../lessoncards'
import p1 from '../../assets/writing/pre-intermediate/p1.webp'
import p2 from '../../assets/writing/pre-intermediate/p2.webp'
import p3 from '../../assets/writing/pre-intermediate/p3.webp'
import p4 from '../../assets/writing/pre-intermediate/p4.webp'

export default function WrPreIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#a84d98]'>A2 WRITING EXERCISES AND TESTS</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={p1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={p2} text={"This, that, these, those"} path={'grammer/a2'}/>
                <LessonCards img={p3} text={'Possessive adjectives and subject pronouns (I/my, you/your, etc.)'} path={''}/>
                <LessonCards img={p4} text={'A/an, plurals – singular and plural forms'} path={''} />
            </div>
        </div>
    </div>
  )
}