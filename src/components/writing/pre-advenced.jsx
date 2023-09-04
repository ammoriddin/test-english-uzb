import React from 'react'
import LessonCards from '../lessoncards'
import ad1 from '../../assets/writing/pre-advenced/ad1.webp'
import ad2 from '../../assets/writing/pre-advenced/ad2.webp'
import ad3 from '../../assets/writing/pre-advenced/ad3.webp'
import ad4 from '../../assets/writing/pre-advenced/ad4.webp'

export default function WrPreAdvenced() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#a84d98]'>B2 WRITING EXERCISES AND TESTS</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={ad1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={ad2} text={"This, that, these, those"} path={'grammer/a2'}/>
                <LessonCards img={ad3} text={'Possessive adjectives and subject pronouns (I/my, you/your, etc.)'} path={''}/>
                <LessonCards img={ad4} text={'A/an, plurals – singular and plural forms'} path={''} />
            </div>
        </div>
    </div>
  )
}