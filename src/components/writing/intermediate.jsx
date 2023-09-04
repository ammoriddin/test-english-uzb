import React from 'react'
import LessonCards from '../lessoncards'
import i1 from '../../assets/writing/intermediate/i1.webp'
import i2 from '../../assets/writing/intermediate/i2.webp'
import i3 from '../../assets/writing/intermediate/i3.webp'
import i4 from '../../assets/writing/intermediate/i4.webp'
import i5 from '../../assets/writing/intermediate/i5.webp'

export default function WrIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#a84d98]'>B1 WRITING EXERCISES AND TESTS</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={i1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={i2} text={"This, that, these, those"} path={'grammer/a2'}/>
                <LessonCards img={i3} text={'Possessive adjectives and subject pronouns (I/my, you/your, etc.)'} path={''}/>
                <LessonCards img={i4} text={'A/an, plurals – singular and plural forms'} path={''} />
                <LessonCards img={i5} text={'A/an, plurals – singular and plural forms'} path={''} />
            </div>
        </div>
    </div>
  )
}