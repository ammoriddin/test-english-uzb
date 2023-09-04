import React from 'react'
import LessonCards from '../lessoncards'
import p1 from '../../assets/reading/pre-intermediate/p1.jpg'
import p2 from '../../assets/reading/pre-intermediate/p2.jpg'
import p3 from '../../assets/reading/pre-intermediate/p3.jpg'
import p4 from '../../assets/reading/pre-intermediate/p4.jpg'
import p5 from '../../assets/reading/pre-intermediate/p5.jpg'
import p6 from '../../assets/reading/pre-intermediate/p6.jpg'
import p7 from '../../assets/reading/pre-intermediate/p7.jpg'
import p8 from '../../assets/reading/pre-intermediate/p8.webp'
import p9 from '../../assets/reading/pre-intermediate/p9.jpg'
import p10 from '../../assets/reading/pre-intermediate/p10.jpg'
import p11 from '../../assets/reading/pre-intermediate/p11.jpg'
import p12 from '../../assets/reading/pre-intermediate/p12.jpg'
import p13 from '../../assets/reading/pre-intermediate/p13.jpg'
import p14 from '../../assets/reading/pre-intermediate/p14.webp'
import p15 from '../../assets/reading/pre-intermediate/p15.webp'
import p16 from '../../assets/reading/pre-intermediate/p16.webp'
import p17 from '../../assets/reading/pre-intermediate/p17.webp'
import p18 from '../../assets/reading/pre-intermediate/p18.webp'
import p19 from '../../assets/reading/pre-intermediate/p19.webp'
import p20 from '../../assets/reading/pre-intermediate/p20.webp'
import p21 from '../../assets/reading/pre-intermediate/p21.webp'

export default function RidPreIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ed1c24]'>A2 READING TESTS
</h1>
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
                <LessonCards img={p10} text={"Whose, possessive 's – Whose is this? It's Mike's"} path={''} />
                <LessonCards img={p11} text={'At, in, on – prepositions of time'} path={''} />
                <LessonCards img={p12} text={'At, in, on – prepositions of place'} path={''} />
                <LessonCards img={p13} text={"Can, can't – ability, possibility, permission"} path={''} />
                <LessonCards img={p14} text={"Present continuous – I'm doing, I'm not doing, Are you doing?"} path={''} />
                <LessonCards img={p15} text={'Present simple or present continuous?'} path={''} />
                <LessonCards img={p16} text={'The imperative – Sit down! Don’t talk!'} path={''} />
                <LessonCards img={p17} text={"Was/were – past simple of 'be'"} path={''} />
                <LessonCards img={p18} text={'Past simple – regular/irregular verbs'} path={''} />
                <LessonCards img={p19} text={'Past simple – negatives and questions'} path={''} />
                <LessonCards img={p20} text={'Verbs + to + infinitive and verbs + -ing'} path={''} />
                <LessonCards img={p21} text={"Would you like...? I'd like..."} path={''} />
            </div>
        </div>
    </div>
  )
}