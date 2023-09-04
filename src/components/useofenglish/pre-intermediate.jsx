import React from 'react'
import LessonCards from '../lessoncards'
import p1 from '../../assets/useofenglish/pre-intermediate/p1.webp'
import p2 from '../../assets/useofenglish/pre-intermediate/p2.webp'
import p3 from '../../assets/useofenglish/pre-intermediate/p3.webp'
import p4 from '../../assets/useofenglish/pre-intermediate/p4.webp'
import p5 from '../../assets/useofenglish/pre-intermediate/p5.webp'
import p6 from '../../assets/useofenglish/pre-intermediate/p6.webp'
import p7 from '../../assets/useofenglish/pre-intermediate/p7.jpg'
import p8 from '../../assets/useofenglish/pre-intermediate/p8.jpg'
import p9 from '../../assets/useofenglish/pre-intermediate/p9.webp'

export default function UsPreIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ec6825]'>A2 USE OF ENGLISH TESTS</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={p1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={p2} text={"This, that, these, those"} path={'grammer/a2'}/>
                <LessonCards img={p3} text={'Possessive adjectives and subject pronouns (I/my, you/your, etc.)'} path={''}/>
                <LessonCards img={p4} text={'A/an, plurals – singular and plural forms'} path={''} />
                <LessonCards img={p5} text={'Adjectives – old, interesting, expensive, etc.'} path={''} />
                <LessonCards img={p6} text={"Present simple – I do, I don't, Do I?"} path={''} />
                <LessonCards img={p7} text={'Questions – word order and question words'} path={''} />
                <LessonCards img={p8} text={'Adverbs of frequency with present simple'} path={''} />
                <LessonCards img={p9} text={'Object pronouns vs subject pronouns – me or I, she or her?'} path={''} />
            </div>
        </div>
    </div>
  )
}