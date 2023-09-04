import React from 'react'
import LessonCards from '../lessoncards'
import i1 from '../../assets/listening/intermediate/i1.jpg'
import i2 from '../../assets/listening/intermediate/i2.jpg'
import i3 from '../../assets/listening/intermediate/i3.webp'
import i4 from '../../assets/listening/intermediate/i4.jpg'
import i5 from '../../assets/listening/intermediate/i5.webp'
import i6 from '../../assets/listening/intermediate/i6.webp'
import i7 from '../../assets/listening/intermediate/i7.webp'
import i8 from '../../assets/listening/intermediate/i8.webp'
import i9 from '../../assets/listening/intermediate/i9.webp'
import i10 from '../../assets/listening/intermediate/i10.webp'
import i11 from '../../assets/listening/intermediate/i11.webp'
import i12 from '../../assets/listening/intermediate/i12.webp'
import i13 from '../../assets/listening/intermediate/i13.webp'
import i14 from '../../assets/listening/intermediate/i14.jpg'
import i15 from '../../assets/listening/intermediate/i15.webp'
import i16 from '../../assets/listening/intermediate/i16.webp'
import i17 from '../../assets/listening/intermediate/i17.webp'

export default function LisIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#fecc00]'>B1 LISTENING TESTS
</h1>
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
                <LessonCards img={i10} text={"Whose, possessive 's – Whose is this? It's Mike's"} path={''} />
                <LessonCards img={i11} text={'At, in, on – prepositions of time'} path={''} />
                <LessonCards img={i12} text={'At, in, on – prepositions of place'} path={''} />
                <LessonCards img={i13} text={"Can, can't – ability, possibility, permission"} path={''} />
                <LessonCards img={i14} text={"Present continuous – I'm doing, I'm not doing, Are you doing?"} path={''} />
                <LessonCards img={i15} text={'Present simple or present continuous?'} path={''} />
                <LessonCards img={i16} text={'The imperative – Sit down! Don’t talk!'} path={''} />
                <LessonCards img={i17} text={'The imperative – Sit down! Don’t talk!'} path={''} />
            </div>
        </div>
    </div>
  )
}