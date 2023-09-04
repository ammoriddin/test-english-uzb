import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import tobe from './this-that-these-those.webp'

export default function ThisThatThose() {

  const [hidden, setHidden] = useState('hidden')
  const [hidden2, setHidden2] = useState('block')
  const exercisesButton = useRef()
  const explanationButton = useRef()

  
  function explanation() {
    setHidden(hidden => hidden = 'block')
    setHidden2(hidden2 => hidden2 = 'hidden')
    exercisesButton.current.classList.remove('active')
    explanationButton.current.classList.add('active')
  }

  function exercises() {
    setHidden2(hidden2 => hidden2 = 'block')
    setHidden(hidden => hidden = 'hidden')
    exercisesButton.current.classList.add('active')
    explanationButton.current.classList.remove('active')
  }
  
  return (
    <>
      <main>
        <h1 className='text-center text-white text-[25px] font-bold py-[10px] my-5 bg-[#1a8ec1]'>PRESENT SIMPLE FORMS OF ‘TO BE’ – AM/IS/ARE
</h1>
        <div className='container'>
          <ul className="flex border-b-2 border-l-[0] border-s border-gray-500 flex-wrap text-sm font-medium text-center text-gray-500 dark:border-gray-700 dark:text-gray-400">
              <li className="mr-2">
                  <button ref={exercisesButton} onClick={exercises} className='inline-block border-x-2 border-t-2 border-s border-[grey] active p-4 rounded-t-lg  px-10 bg-gray-800 text-gray-300'>Exercises</button>
              </li>
              <li className="mr-2">
                  <button ref={explanationButton} onClick={explanation} className="inline-block border-x-2 border-t-2 border-s border-[grey] p-4 rounded-t-lg  px-10 bg-gray-800 text-gray-300">Explanation</button>
              </li>
          </ul>

          <div className={`my-[10px] ${hidden2}`}>
            <div className='flex items-center justify-end'>
              <p className='font-[300] text-gray-500 mr-2 text text-[25px] items-center'>Exercises: </p>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>1</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>2</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>3</Link>
              <Link className='bg-[#1a8ec1] mr-5 w-[50px] h-[40px] flex justify-center items-center text-white rounded-[5px]'>4</Link>
            </div>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>PRESENT SIMPLE FORMS OF ‘TO BE’ – AM/IS/ARE</h1>
            <h1 className='text-[25px] py-[10px] my-5 text-[#1a8ec1]'>Exercises 1</h1>
            <p className='bg-[#dbdbdb88] border-2 border-s border-black p-3 inline-block rounded-[10px]'>Choose the correct present simple forms of ‘to be’ for the gaps below.</p>
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>1</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>2</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>3</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>

            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>4</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>5</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>6</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>

            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>7</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>8</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>
            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>9</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>

            <div className='flex my-5 items-center gap-3'>
              <span className='bg-[#1a8ec1] text-white w-[30px] h-[30px] flex justify-center items-center p-5 rounded-full'>10</span>
              <p className='text-[19px]'>A:</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="is">Is</option>
                <option value="are">Are</option>
              </select>
              <p className='text-[19px]'>you teacher?</p>
              <p className='text-[19px]'>B: Yes, I</p>
              <select className='border-l-[1px] border-t-[1px] border-b-2 px-3 border-r-2 border-s border-[grey]'>
                <option value=""></option>
                <option value="are">am</option>
                <option value="am">are</option>
              </select>
            </div>

            <button className='py-2 px-5 bg-[#1a8ec1] flex justify-center items-center text-white mx-auto rounded-[10px] my-10'>
              Javoblarni Tekshirish
            </button>
          </div>

          <div className={`my-10 ${hidden}`}>
            <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'>The present simple form of <b><i>be</i></b></h1>

            <div className='w-[55%]'>
              <img className='w-[100%]' src={tobe} alt="..." />
            </div>

            <div className='info my-10'>
              <p className='text-[25px] mb-5'>The present simple of the verb <b>be</b> has three forms:</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>I <span className='text-[#ec6825]'><b>am</b></span></i></li>
                <li><i>He/She/It <span className='text-[#ec6825]'><b>is</b></span></i></li>
                <li><i>we/You/They <span className='text-[#ec6825]'><b>are</b></span></i></li>
              </ul>

              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'><b>they</b>= people and things</h1>

              <p className='text-[25px] mb-5'>We use <b>he</b> for a man, <b></b> for a woman, and <b>it</b> for a thing.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><b className='text-[#ec6825]'>He</b>'s little boy</i></li>
                <li><i><b className='text-[#ec6825]'>She</b>'s beautiful</i></li>
                <li><i>I like this TV. <span className='text-[#ec6825]'><b>It's</b></span> very big</i></li>
              </ul>

              <p className='text-[25px] mb-5'>We use <b>they</b> for people and for things.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i>I love Sara and Jonas. <span className='text-[#ec6825]'><b>They</b></span> are my friend</i></li>
                <li><i>I love these chairs. <span className='text-[#ec6825]'><b>They</b></span> are very beautiful</i></li>
              </ul>

              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'>Don’t forget the subject</h1>

              <p className='text-[25px] mb-5'>We use <b>they</b> for people and for things.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li>It is cold. (NOT<del> Is cold.)</del></li>
                <li>Sally is a wonderful woman. (NOT<del> s a wonderful woman.)</del></li>
              </ul>

              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'>Contractions or short forms</h1>

              <p className='text-[25px] mb-5'>We use <b>‘m,</b> <b>‘s</b> and <b>‘re</b> with personal pronouns (<b>I, you, he, etc.</b>)</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><b className='text-[#ec6825]'>I'm</b> sad</i></li>
                <li><i><b className='text-[#ec6825]'>You're</b> tired</i></li>
                <li><i><b className='text-[#ec6825]'>She's</b> from Scotland</i></li>
              </ul>

              <p className='text-[25px] mb-5'>But we can also use <b>‘s</b> with names.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li><i><b className='text-[#ec6825]'>Laura’s </b> beautiful</i></li>
                <li><i><b className='text-[#ec6825]'>London’s </b> an expensive city. </i></li>
              </ul>

              <h1 className='text-[30px] py-[10px] my-5 text-[#1a8ec1]'>Contractions in short answers</h1>

              <p className='text-[25px] mb-5'>We can only use <b>contractions</b> in <b>negative short answers</b>. Not in positive short answers.</p>

              <ul className='list-disc pl-5 text-[20px] mb-5'>
                <li>Yes, <b className='text-[#ec6825]'>I am</b>. (NOT<del> Yes, I'm.)</del></li>
                <li>Yes, She <b className='text-[#ec6825]'>is</b>. (NOT<del> Yes, She's.)</del></li>
                <li>Yes, They <b className='text-[#ec6825]'>are</b>. (NOT<del> Yes, They're.)</del></li>
              </ul>

            </div>
          </div>
        </div>
      </main>
    </>
  )
}