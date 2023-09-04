import React from 'react'
import LessonCards from '../lessoncards'
import e1 from '../../assets/useofenglish/elementry/e1.webp'
import e2 from '../../assets/useofenglish/elementry/e2.webp'
import e3 from '../../assets/useofenglish/elementry/e3.webp'
import e4 from '../../assets/useofenglish/elementry/e4.webp'
import e5 from '../../assets/useofenglish/elementry/e5.webp'
import e6 from '../../assets/useofenglish/elementry/e6.jpg'
import e7 from '../../assets/useofenglish/elementry/e7.webp'
import e8 from '../../assets/useofenglish/elementry/e8.webp'
import e9 from '../../assets/useofenglish/elementry/e9.jpg'
import e10 from '../../assets/useofenglish/elementry/e10.webp'

export default function UsElementry() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ec6825]'>A1 USE OF ENGLISH TESTS</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={e1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={e2} text={"This, that, these, those"} path={'grammer/a2'}/>
                <LessonCards img={e3} text={'Possessive adjectives and subject pronouns (I/my, you/your, etc.)'} path={''}/>
                <LessonCards img={e4} text={'A/an, plurals – singular and plural forms'} path={''} />
                <LessonCards img={e5} text={'Adjectives – old, interesting, expensive, etc.'} path={''} />
                <LessonCards img={e6} text={"Present simple – I do, I don't, Do I?"} path={''} />
                <LessonCards img={e7} text={'Questions – word order and question words'} path={''} />
                <LessonCards img={e8} text={'Adverbs of frequency with present simple'} path={''} />
                <LessonCards img={e9} text={'Object pronouns vs subject pronouns – me or I, she or her?'} path={''} />
                <LessonCards img={e10} text={"Whose, possessive 's – Whose is this? It's Mike's"} path={''} />
            </div>
        </div>
    </div>
  )
}