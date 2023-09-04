import React from 'react'
import LessonCards from '../lessoncards'
import u1 from '../../assets/useofenglish/upper-intermediate/u1.webp'
import u2 from '../../assets/useofenglish/upper-intermediate/u2.webp'
import u3 from '../../assets/useofenglish/upper-intermediate/u3.webp'
import u4 from '../../assets/useofenglish/upper-intermediate/u4.webp'
import u5 from '../../assets/useofenglish/upper-intermediate/u5.webp'
import u6 from '../../assets/useofenglish/upper-intermediate/u6.webp'
import u7 from '../../assets/useofenglish/upper-intermediate/u7.webp'
import u8 from '../../assets/useofenglish/upper-intermediate/u8.jpg'
import u9 from '../../assets/useofenglish/upper-intermediate/u9.jpg'

export default function UsUpperIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ec6825]'>B1+ USE OF ENGLISH TESTS</h1>
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
            </div>
        </div>
    </div>
  )
}