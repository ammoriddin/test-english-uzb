import React from 'react'
import LessonCards from '../lessoncards'
import p1 from '../../assets/listening/pre-intermediate/p1.webp'
import p2 from '../../assets/listening/pre-intermediate/p2.webp'
import p3 from '../../assets/listening/pre-intermediate/p3.webp'
import p4 from '../../assets/listening/pre-intermediate/p4.webp'
import p5 from '../../assets/listening/pre-intermediate/p5.webp'
import p6 from '../../assets/listening/pre-intermediate/p6.webp'
import p7 from '../../assets/listening/pre-intermediate/p7.webp'
import p8 from '../../assets/listening/pre-intermediate/p8.jpg'
import p9 from '../../assets/listening/pre-intermediate/p9.webp'
import p10 from '../../assets/listening/pre-intermediate/p10.webp'
import p11 from '../../assets/listening/pre-intermediate/p11.webp'
import p12 from '../../assets/listening/pre-intermediate/p12.webp'
import p13 from '../../assets/listening/pre-intermediate/p13.webp'
import p14 from '../../assets/listening/pre-intermediate/p14.webp'
import p15 from '../../assets/listening/pre-intermediate/p15.webp'
import p16 from '../../assets/listening/pre-intermediate/p16.webp'
import p17 from '../../assets/listening/pre-intermediate/p17.webp'
import p18 from '../../assets/listening/pre-intermediate/p18.webp'
import p19 from '../../assets/listening/pre-intermediate/p19.webp'
import p20 from '../../assets/listening/pre-intermediate/p20.webp'

export default function LisPreIntermediate() {
  return (
    <div>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#fecc00]'>A2 LISTENING TESTS

</h1>
        <div className='container'>
            <div className='card-wrapper flex justify-around items-center flex-wrap gap-y-5 pb-[20px]'>
                <LessonCards img={p1} text={"Asking questions in English – Question forms"} path={'grammer/a1'}/>
                <LessonCards img={p2} text={"Subject questions, questions with preposition"} path={'grammer/a2'}/>
                <LessonCards img={p3} text={'Present simple vs present continuous'} path={''}/>
                <LessonCards img={p4} text={'Past simple – Form and use'} path={''} />
                <LessonCards img={p5} text={'Past continuous and past simple'} path={''} />
                <LessonCards img={p6} text={"Expressing purpose with 'to' and 'for'"} path={''} />
                <LessonCards img={p7} text={'Questions – word order and question words'} path={''} />
                <LessonCards img={p8} text={'However, although, because, so, and time connectors'} path={''} />
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
            </div>
        </div>
    </div>
  )
}