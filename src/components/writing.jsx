import LessonCards from './lessoncards'
import writing1 from '../assets/writing1.webp'
import writing2 from '../assets/writing2.webp'
import writing3 from '../assets/writing3.webp'
import writing4 from '../assets/writing4.webp'
import writing5 from '../assets/writing5.webp'

export default function Writing() {
  return (
    <>
        <div>
            <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#a84d98]'>Writing</h1>
            <div className='container'>
                <div className='card-wrapper flex justify-start gap-x-[22px] items-center flex-wrap gap-y-5 pb-[20px]'>
<<<<<<< HEAD
                    <LessonCards img={writing1} text={'A1 Writing Exercises and Test'} path={'writing/a1'}/>
                    <LessonCards img={writing2} text={'A2 Writing Exercises and Test'} path={'writing/a2'}/>
                    <LessonCards img={writing3} text={'B1 Writing Exercises and Test'} path={'writing/b1'}/>
                    <LessonCards img={writing4} text={'B1+ Writing Exercises and Test'} path={'writing/b1+'}/>
                    <LessonCards img={writing5} text={'B2 Writing Exercises and Test'} path={'writing/b2'}/>
=======
                    <LessonCards img={writing1} text={'A1 Writing mashqlar va Testlar'} />
                    <LessonCards img={writing2} text={'A2 Writing mashqlar va Testlar'} />
                    <LessonCards img={writing3} text={'B1 Writing mashqlar va Testlar'} />
                    <LessonCards img={writing4} text={'B1+ Writing mashqlar va Testlar'} />
                    <LessonCards img={writing5} text={'B2 Writing mashqlar va Testlar'} />
>>>>>>> 84716e272a6706026b8ad1e9f0446f930f8aed6b
                </div>
            </div>
        </div>
    </>
  )
}
