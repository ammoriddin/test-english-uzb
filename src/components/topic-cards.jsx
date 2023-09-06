import { Link } from 'react-router-dom';

export default function TopicCards({img, topic, desc, color, path}) {

  console.log(color);

  return (
    <div className='card w-[32%] mb-10 rounded-[15px]'>
      <div className='p-[1px]'>
        <img className='rounded-t-[15px] w-full' src={img} alt="." />
      </div>
      <div className='p-[20px]'>
        <span className={`text-[25px] tracking-tighter font-[600] text-[#${color}]`}>{topic}</span>
        <p className='mt-[10px] mb-[35px] tracking-[-0.5px] font-[600] text-[#838383] '>{desc}</p>
        <Link to={`/${path}`} className='border-[2px] border-slate-500 border-solid rounded-md px-[10px] py-[7px] text-[20px] font-[500] text-[#838383]'>Darsga o&apos;tish</Link>
      </div>
    </div>
  )
}