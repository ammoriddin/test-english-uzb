import React from 'react'
import LessonCards from '../lessoncards'
import ad1 from '../../assets/useofenglish/pre-advenced/ad1.jpg'
import ad2 from '../../assets/useofenglish/pre-advenced/ad2.jpg'
import ad3 from '../../assets/useofenglish/pre-advenced/ad3.jpg'
import ad4 from '../../assets/useofenglish/pre-advenced/ad4.jpg'
import ad5 from '../../assets/useofenglish/pre-advenced/ad5.jpg'
import ad6 from '../../assets/useofenglish/pre-advenced/ad6.jpg'
import ad7 from '../../assets/useofenglish/pre-advenced/ad7.jpg'
import ad8 from '../../assets/useofenglish/pre-advenced/ad8.jpg'
import ad9 from '../../assets/useofenglish/pre-advenced/ad9.jpg'

export default function UsPreAdvenced() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ec6825]'>B2 USE OF ENGLISH TESTS</h1>
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
            </div>
        </div>
    </div>
  )
}