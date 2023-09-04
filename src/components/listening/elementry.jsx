import React from 'react'
import LessonCards from '../lessoncards'
import e1 from '../../assets/listening/elementry/e1.jpg'
import e2 from '../../assets/listening/elementry/e2.webp'
import e3 from '../../assets/listening/elementry/e3.webp'
import e4 from '../../assets/listening/elementry/e4.webp'
import e5 from '../../assets/listening/elementry/e5.webp'
import e6 from '../../assets/listening/elementry/e6.webp'
import e7 from '../../assets/listening/elementry/e7.webp'
import e8 from '../../assets/listening/elementry/e8.jpg'
import e9 from '../../assets/listening/elementry/e9.webp'
import e10 from '../../assets/listening/elementry/e10.webp'
import e11 from '../../assets/listening/elementry/e11.webp'
import e12 from '../../assets/listening/elementry/e12.webp'
import e13 from '../../assets/listening/elementry/e13.webp'
import e14 from '../../assets/listening/elementry/e14.webp'
import e15 from '../../assets/listening/elementry/e15.webp'
import e16 from '../../assets/listening/elementry/e16.webp'
import e17 from '../../assets/listening/elementry/e17.jpg'
import e18 from '../../assets/listening/elementry/e18.webp'
import e19 from '../../assets/listening/elementry/e19.webp'
import e20 from '../../assets/listening/elementry/e20.webp'
import e21 from '../../assets/listening/elementry/e21.webp'

export default function LisElementry() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#fecc00]'>A1 LISTENING TESTS
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
                <LessonCards img={e17} text={"Was/were – past simple of 'be'"} path={''} />
                <LessonCards img={e18} text={'Past simple – regular/irregular verbs'} path={''} />
                <LessonCards img={e19} text={'Past simple – negatives and questions'} path={''} />
                <LessonCards img={e20} text={'Verbs + to + infinitive and verbs + -ing'} path={''} />
                <LessonCards img={e21} text={"Would you like...? I'd like..."} path={''} />
            </div>
        </div>
    </div>
  )
}