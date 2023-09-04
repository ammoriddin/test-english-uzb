import React from 'react'
import LessonCards from '../lessoncards'
import e1 from '../../assets/reading/elementry/e1.jpg'
import e2 from '../../assets/reading/elementry/e2.webp'
import e3 from '../../assets/reading/elementry/e3.webp'
import e4 from '../../assets/reading/elementry/e4.webp'
import e5 from '../../assets/reading/elementry/e5.webp'
import e6 from '../../assets/reading/elementry/e6.webp'
import e7 from '../../assets/reading/elementry/e7.webp'
import e8 from '../../assets/reading/elementry/e8.webp'
import e9 from '../../assets/reading/elementry/e9.webp'
import e10 from '../../assets/reading/elementry/e10.webp'
import e11 from '../../assets/reading/elementry/e11.webp'
import e12 from '../../assets/reading/elementry/e12.webp'
import e13 from '../../assets/reading/elementry/e13.jpg'
import e14 from '../../assets/reading/elementry/e14.webp'
import e15 from '../../assets/reading/elementry/e15.webp'
import e16 from '../../assets/reading/elementry/e16.webp'

export default function RidElementry() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ed1c24]'>A1 READING TESTS
</h1>
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
                <LessonCards img={e11} text={'At, in, on – prepositions of time'} path={''} />
                <LessonCards img={e12} text={'At, in, on – prepositions of place'} path={''} />
                <LessonCards img={e13} text={"Can, can't – ability, possibility, permission"} path={''} />
                <LessonCards img={e14} text={"Present continuous – I'm doing, I'm not doing, Are you doing?"} path={''} />
                <LessonCards img={e15} text={'Present simple or present continuous?'} path={''} />
                <LessonCards img={e16} text={'The imperative – Sit down! Don’t talk!'} path={''} />
            </div>
        </div>
    </div>
  )
}