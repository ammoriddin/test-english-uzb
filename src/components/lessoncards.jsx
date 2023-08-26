import { Link } from 'react-router-dom'

export default function LessonCards({img, text, path}) {
  return (
    <div className='card w-[350px] rounded-[15px]'>
        <Link to={`/${path}`}>
            <div>
                <img className='rounded-t-[15px]' src={img} alt="" />
            </div>
            <div className='p-6 box-border'>
              <div className='min-h-[4em] flex items-center relative '>
                <p className='font-[500] text-[#a7a2a2]'>{text}</p>
              </div>
            </div>
        </Link>
    </div>
  )
}
