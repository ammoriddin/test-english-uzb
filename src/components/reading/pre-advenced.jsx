import React from 'react'
import LessonCards from '../lessoncards'
import u1 from '../../assets/reading/pre-advenced/u1.jpg'
import u2 from '../../assets/reading/pre-advenced/u2.jpg'
import u3 from '../../assets/reading/pre-advenced/u3.jpg'
import u4 from '../../assets/reading/pre-advenced/u4.jpg'
import u5 from '../../assets/reading/pre-advenced/u5.jpg'
import u6 from '../../assets/reading/pre-advenced/u6.jpg'
import u7 from '../../assets/reading/pre-advenced/u7.webp'
import u8 from '../../assets/reading/pre-advenced/u8.webp'
import u9 from '../../assets/reading/pre-advenced/u9.webp'
import u10 from '../../assets/reading/pre-advenced/u10.webp'
import u11 from '../../assets/reading/pre-advenced/u11.webp'
import u12 from '../../assets/reading/pre-advenced/u12.webp'
import u13 from '../../assets/reading/pre-advenced/u13.webp'

export default function RidPreAdvenced() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ed1c24]'>B2 READING TESTS</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={u1} text={"Present simple forms of 'to be' – am/is/are"} path={'grammer/a1'}/>
                <LessonCards img={u2} text={"This, that, these, those"} path={'grammer/a2'}/>
                <LessonCards img={u3} text={'Possessive adjectives and subject pronouns (I/my, you/your, etc.)'} path={''}/>
                <LessonCards img={u4} text={'A/an, plurals – singular and plural forms'} path={''} />
                <LessonCards img={u5} text={'Adjectives – old, interesting, expensive, etc.'} path={''} />
                <LessonCards img={u6} text={"Present simple – I do, I don't, Do I?"} path={''} />
                <LessonCards img={u7} text={'Questions – word order and question words'} path={''} />
                <LessonCards img={u8} text={'Adverbs of frequency with present simple'} path={''} />
                <LessonCards img={u9} text={'Object pronouns vs subject pronouns – me or I, she or her?'} path={''} />
                <LessonCards img={u10} text={"Whose, possessive 's – Whose is this? It's Mike's"} path={''} />
                <LessonCards img={u11} text={'At, in, on – prepositions of time'} path={''} />
                <LessonCards img={u12} text={'At, in, on – prepositions of place'} path={''} />
                <LessonCards img={u13} text={"Can, can't – ability, possibility, permission"} path={''} />
            </div>
        </div>
    </div>
  )
}