import logo from '../assets/logo.svg'
import search from "../assets/search.svg"
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
    <nav className='py-5 h-[10%] relative z-10 bg-[#313b49f7]'>
        <div className='container flex justify-between flex-wrap items-center'>
            <Link to={'/'} className='w-[174px]'>
                <img className='w-full' src={logo} alt="testenglish.com" />
            </Link>
            <ul className='flex gap-10 text-white font-bold text-[1em]'>
                <li><Link to={'/grammer'}>Grammar</Link></li>
                <li><Link to={'/listening'}>Listening</Link></li>
                <li><Link to={'/reading'}>Reading</Link></li>
                <li><Link to={'/useofenglish'}>Ingliz tilidan foydalanish</Link></li>
                <li><Link to={'/writing'}>Writing</Link></li>
                <li><Link to={'/exams'}>Imtihonlar</Link></li>
            </ul>
            <button className='w-[35px]'>
                <img className='w-full' src={search} alt="search" />
            </button>
        </div>
    </nav>
  )
}
