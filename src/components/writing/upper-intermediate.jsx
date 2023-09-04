import React from 'react'
import LessonCards from '../lessoncards'
import u1 from '../../assets/writing/upper-intermediate/u1.webp'
import u2 from '../../assets/writing/upper-intermediate/u2.webp'
import u3 from '../../assets/writing/upper-intermediate/u3.webp'
import u4 from '../../assets/writing/upper-intermediate/u4.webp'

export default function WrUpperIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#a84d98]'>B1+ WRITING EXERCISES AND TESTS</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={u1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={u2} text={"This, that, these, those"} path={'grammer/a2'}/>
                <LessonCards img={u3} text={'Possessive adjectives and subject pronouns (I/my, you/your, etc.)'} path={''}/>
                <LessonCards img={u4} text={'A/an, plurals – singular and plural forms'} path={''} />
            </div>
        </div>
    </div>
  )
}