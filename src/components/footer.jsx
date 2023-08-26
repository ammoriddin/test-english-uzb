// import React from 'react'
import logo from "../assets/logo.svg"

export default function Footer() {
    return (
    <>
        <footer className='w-full py-10 bg-[#37424e]'>
            <div className="w-full max-w-[800px] px-[20px] mx-[auto] flex justify-between items-start">
                <div className='text-white font-[300] border-[#808080] border-r-[1px] border-solid py-[15px] pr-[60px] mr-[10px]'>
                    <div className='w-[150px]'>
                        <img className='w-full' src={logo} alt="logo" />
                    </div>
                    <p className='my-10'>© Copyright 2023 <br/> Barcha huquqlar himoyalangan.</p>

                </div>

                <div className='text-white font-[300] border-[#808080] border-r-[1px] border-solid py-[15px] pr-[60px] mr-[10px]'>
                    <h2 className='font-[600] text-[20px]'>Darajalar</h2>
                    <u className='list-none no-underline font-bold'>
                        <li><a href="#">A1 Elementary</a></li>
                        <li><a href="#">A2 Pre-intermediate</a></li>
                        <li><a href="#">B1 Intermediate</a></li>
                        <li><a href="#">B1 Upper-intermediate</a></li>
                        <li><a href="#">B2 Pre-advanced</a></li>
                    </u>
                </div>

                <div className='text-white font-[300] border-[#808080] border-r-[1px] border-solid py-[15px] pr-[60px] mr-10px]'>
                    <h2 className='font-[600] text-[20px]'>Ma&apos;lumot</h2>
                    <u className='list-none no-underline font-bold'>
                        <li><a href="#">Biz haqimizda</a></li>
                        <li><a href="#">Foydalanish shartlar</a></li>
                        <li><a href="#">Maxfiylik siyosati</a></li>
                        <li><a href="#">Cookie siyosati</a></li>
                        <li><a href="#">Cookie deklaratsiyasi</a></li>
                    </u>
                </div>

            </div>
        </footer>
    </>
    )
}
