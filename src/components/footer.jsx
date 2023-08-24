import React from 'react'
import logo from "../assets/logo.svg"

export default function Footer() {
  return (
    <>
        <footer className='w-full py-10 bg-[#37424e]'>
            <div className="w-full max-w-[800px] px-[20px] mx-[auto] flex justify-between items-start">
                <div className='text-white font-[300] border-[#808080] border-r-[1px] border-solid py-[20px] pr-[70px] mr-[10px]'>
                    <div className='w-[150px]'>
                        <img className='w-full' src={logo} alt="logo" />
                    </div>
                    <p className='my-10'>© Copyright 2016-2023 <br/> All rights reserved.</p>
                    <p>Made at</p>

                </div>

                <div className='text-white font-[300] border-[#808080] border-r-[1px] border-solid py-[35px] pr-[70px] mr-[10px]'>
                    <h2 className='font-[600] text-[20px]'>Levels</h2>
                    <u className='list-none no-underline font-bold'>
                        <li><a href="#">A1 Elementary</a></li>
                        <li><a href="#">A2 Pre-intermediate</a></li>
                        <li><a href="#">B1 Intermediate</a></li>
                        <li><a href="#">B1 Upper-intermediate</a></li>
                        <li><a href="#">B2 Pre-advanced</a></li>
                    </u>
                </div>

                <div className='text-white font-[300] border-[#808080] border-r-[1px] border-solid py-[35px] pr-[70px] mr-[10px]'>
                    <h2 className='font-[600] text-[20px]'>Info</h2>
                    <u className='list-none no-underline font-bold '>
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Cookie Policy</a></li>
                        <li><a href="#">Cookie Declaration</a></li>
                    </u>
                </div>

            </div>
        </footer>
    </>
  )
}
