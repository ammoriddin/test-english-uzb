import React from 'react'
import LessonCards from '../lessoncards'
import i1 from '../../assets/useofenglish/intermediate/i1.webp'
import i2 from '../../assets/useofenglish/intermediate/i2.webp'
import i3 from '../../assets/useofenglish/intermediate/i3.webp'
import i4 from '../../assets/useofenglish/intermediate/i4.webp'
import i5 from '../../assets/useofenglish/intermediate/i5.webp'
import i6 from '../../assets/useofenglish/intermediate/i6.webp'
import i7 from '../../assets/useofenglish/intermediate/i7.jpg'
import i8 from '../../assets/useofenglish/intermediate/i8.webp'
import i9 from '../../assets/useofenglish/intermediate/i9.webp'

export default function UsIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ec6825]'>B1 USE OF ENGLISH TESTS</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={i1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={i2} text={"This, that, these, those"} path={'grammer/a2'}/>
                <LessonCards img={i3} text={'Possessive adjectives and subject pronouns (I/my, you/your, etc.)'} path={''}/>
                <LessonCards img={i4} text={'A/an, plurals – singular and plural forms'} path={''} />
                <LessonCards img={i5} text={'Adjectives – old, interesting, expensive, etc.'} path={''} />
                <LessonCards img={i6} text={"Present simple – I do, I don't, Do I?"} path={''} />
                <LessonCards img={i7} text={'Questions – word order and question words'} path={''} />
                <LessonCards img={i8} text={'Adverbs of frequency with present simple'} path={''} />
                <LessonCards img={i9} text={'Object pronouns vs subject pronouns – me or I, she or her?'} path={''} />
            </div>
        </div>
    </div>
  )
}