import LessonCards from './lessoncards'
import eng1 from '../assets/eng1.webp'
import eng2 from '../assets/eng2.webp'
import eng3 from '../assets/eng3.webp'
import eng4 from '../assets/eng4.webp'
import eng5 from '../assets/eng5.webp'

export default function UseOfEnglish() {
  return (
    <>
        <div>
            <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#ec6825]'>Ingliz tilidan foydalanish</h1>
            <div className='container'>
                <div className='card-wrapper flex justify-start gap-x-[22px] items-center flex-wrap gap-y-5 pb-[20px]'>
                    <LessonCards img={eng1} text={'A1 Ingliz tilidan foydalanish Testi'} />
                    <LessonCards img={eng2} text={'A2 Ingliz tilidan foydalanish Testi'} />
                    <LessonCards img={eng3} text={'B1 Ingliz tilidan foydalanish Testi'} />
                    <LessonCards img={eng4} text={'B1+ Ingliz tilidan foydalanish Testi'} />
                    <LessonCards img={eng5} text={'B2 Ingliz tilidan foydalanish Testi'} />
                </div>
            </div>
        </div>
    </>
  )
}
