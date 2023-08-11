import React from 'react'
import '../../App.css'
import Navbar from '../Navbar'

const MainHero = () => {
  return (
    <div className='mainhero-container relative flex flex-col justify-between align-middle '>
        <Navbar />
        <div className='mx-auto max-w-2xl absolute bottom-20 flex flex-col gap-5 justify-center align-middle text-center'>
            <h1 className='text-3xl font-extrabold text-[#fff]'>Home is Life </h1>
            <p className='text-lg text-[#fff] '>We build strength, stability and self reliance through shelter.</p>
            <button>Act Now</button>
        </div>
    </div>
  )
}

export default MainHero