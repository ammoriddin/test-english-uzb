import TopicCards from "../components/topic-cards"
import grammer from '../assets/grammer.webp'
import listening from '../assets/listening.webp'
import reading from '../assets/reading.webp'
import useofenglish from '../assets/useofenglish.webp'
import writing from '../assets/writing.jpg'
import exams from '../assets/exams.webp'
import leveltest from '../assets/leveltest.webp'

export default function Lessons() {
  return (
    <div className='container2 mt-10'>
        <h2 className='text-center mb-10 text-[35px] font-bold'>Bugun nima <span className='text-[40px] text-[#50af31]'>o&apos;rganmoqchisiz?</span></h2>
        <div className='flex justify-between items-center flex-wrap'>
            <TopicCards img={grammer} topic={'Grammer Lesson'} desc={'Study the grammar lessons that are typically included in each level: A1, A2, B1, B1+, B2. There are three or more exercises and an explanation in each lesson, and feedback for every single question!'} color={'1a8ec1'} path={'grammer'} />

            <TopicCards img={listening} topic={'Listening Lesson'} desc={'Improve your listening skills by practicing with audio and video tests. There are tests for each level: A1, A2, B1, B1+, B2. You will be able to see the transcription of the audio after you submit your answers.'} color={'fecc00'} path={'listening'} />

            <TopicCards img={reading} topic={'Reading Lesson'} desc={'Need to improve your reading skills? Work on our reading tests. There are reading tests for A1, A2, B1, B1+ and B2. You will find different types of texts and there are different types of questions in each test'} color={'ed1c24'} path={'reading'} />

            <TopicCards img={useofenglish} topic={'Use Of English'} desc={'In each of these tests you will find 15 multiple-choice questions about the different grammar lessons that you have studied for a specific level: A1, A2, B1, B1+ and B2.  You will get feedback for every answer.'} color={'ec6825'} path={'useofenglish'} />

            <TopicCards img={writing} topic={'Writing Lesson'} desc={'Improve your writing with the exercises suggested in each lesson. Different types of texts for each level: A1, A2, B1, B1+, or B2. You will learn how to organise and connect the text in your compositions.'} color={'a84d98'} path={'writing'} />

            <TopicCards img={exams} topic={'Exams'} desc={'Improve your exam skills and achieve better results with our practice materials. Test-English will help you with your Cambridge KEY, Cambridge Preliminary, Cambridge First, IELTS, or TOEFL iBT exam.'} color={'50af31'} path={'exams'} />

            <TopicCards img={leveltest} topic={'Level Test'} desc={"If you are not sure about your level, don't worry, you can take this online test. There are 60 multiple-choice questions and there is no time limit. You will be able to see the answers when you finish the test."} color={'50af31'} path={'leveltest'} />

        </div>
    </div>
  )
}
