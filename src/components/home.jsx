// import React from 'react'
import Lessons from './lessons'
import Hero from './hero'

export default function HomePage() {
  return (
    <>
        <header className="relative">
            <div className="h-[100%] w-[100%] bg-black opacity-[0.4] absolute z-[0]"></div>
            <Hero />
        </header>
        <Lessons />
    </>
  )
}
