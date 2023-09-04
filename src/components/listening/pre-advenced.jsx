import React from 'react'
import LessonCards from '../lessoncards'
import ad1 from '../../assets/listening/pre-advenced/ad1.webp'
import ad2 from '../../assets/listening/pre-advenced/ad2.webp'
import ad3 from '../../assets/listening/pre-advenced/ad3.webp'
import ad4 from '../../assets/listening/pre-advenced/ad4.webp'
import ad5 from '../../assets/listening/pre-advenced/ad5.webp'
import ad6 from '../../assets/listening/pre-advenced/ad6.webp'
import ad7 from '../../assets/listening/pre-advenced/ad7.webp'
import ad8 from '../../assets/listening/pre-advenced/ad8.webp'
import ad9 from '../../assets/listening/pre-advenced/ad9.jpg'
import ad10 from '../../assets/listening/pre-advenced/ad10.webp'
import ad11 from '../../assets/listening/pre-advenced/ad11.webp'
import ad12 from '../../assets/listening/pre-advenced/ad12.webp'
import ad13 from '../../assets/listening/pre-advenced/ad13.webp'
import ad14 from '../../assets/listening/pre-advenced/ad14.webp'
import ad15 from '../../assets/listening/pre-advenced/ad15.webp'
import ad16 from '../../assets/listening/pre-advenced/ad16.webp'
import ad17 from '../../assets/listening/pre-advenced/ad17.jpg'
import ad18 from '../../assets/listening/pre-advenced/ad18.jpg'
import ad19 from '../../assets/listening/pre-advenced/ad19.webp'

export default function LisPreAdvenced() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#fecc00]'>B2 LISTENING TESTS</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={ad1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={ad2} text={"This, that, these, those"} path={'grammer/a2'}/>
                <LessonCards img={ad3} text={'Possessive adjectives and subject pronouns (I/my, you/your, etc.)'} path={''}/>
                <LessonCards img={ad4} text={'A/an, plurals – singular and plural forms'} path={''} />
                <LessonCards img={ad5} text={'Adjectives – old, interesting, expensive, etc.'} path={''} />
                <LessonCards img={ad6} text={"Present simple – I do, I don't, Do I?"} path={''} />
                <LessonCards img={ad7} text={'Questions – word order and question words'} path={''} />
                <LessonCards img={ad8} text={'Adverbs of frequency with present simple'} path={''} />
                <LessonCards img={ad9} text={'Object pronouns vs subject pronouns – me or I, she or her?'} path={''} />
                <LessonCards img={ad10} text={"Whose, possessive 's – Whose is this? It's Mike's"} path={''} />
                <LessonCards img={ad11} text={'At, in, on – prepositions of time'} path={''} />
                <LessonCards img={ad12} text={'At, in, on – prepositions of place'} path={''} />
                <LessonCards img={ad13} text={"Can, can't – ability, possibility, permission"} path={''} />
                <LessonCards img={ad14} text={"Present continuous – I'm doing, I'm not doing, Are you doing?"} path={''} />
                <LessonCards img={ad15} text={'Present simple or present continuous?'} path={''} />
                <LessonCards img={ad16} text={'The imperative – Sit down! Don’t talk!'} path={''} />
                <LessonCards img={ad17} text={"Was/were – past simple of 'be'"} path={''} />
                <LessonCards img={ad18} text={'Past simple – regular/irregular verbs'} path={''} />
                <LessonCards img={ad19} text={'Past simple – negatives and questions'} path={''} />
            </div>
        </div>
    </div>
  )
}