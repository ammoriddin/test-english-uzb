import React from 'react'
import LessonCards from '../lessoncards'
import i1 from '../../assets/reading/intermediate/i1.jpg'
import i2 from '../../assets/reading/intermediate/i2.jpg'
import i3 from '../../assets/reading/intermediate/i3.jpg'
import i4 from '../../assets/reading/intermediate/i4.jpg'
import i5 from '../../assets/reading/intermediate/i5.jpg'
import i6 from '../../assets/reading/intermediate/i6.jpg'
import i7 from '../../assets/reading/intermediate/i7.jpg'
import i8 from '../../assets/reading/intermediate/i8.jpg'
import i9 from '../../assets/reading/intermediate/i9.webp'
import i10 from '../../assets/reading/intermediate/i10.webp'
import i11 from '../../assets/reading/intermediate/i11.webp'
import i12 from '../../assets/reading/intermediate/i12.webp'
import i13 from '../../assets/reading/intermediate/i13.webp'
import i14 from '../../assets/reading/intermediate/i14.webp'
import i15 from '../../assets/reading/intermediate/i15.webp'

export default function RidPIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ed1c24]'>B2 READING TESTS
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
            </div>
        </div>
    </div>
  )
}