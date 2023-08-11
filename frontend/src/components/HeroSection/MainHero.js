import React from 'react'
import '../../App.css'
import Navbar from '../Navbar'
import AddOForm from '../Forms/AddOForm'

const MainHero = () => {
  return (
    <div className='mainhero-container relative flex flex-col justify-between align-middle '>
        {/* <Navbar /> */}
        <h1 className='text-center font-extrabold text-5xl mt-10 mb-5'>Robust Donation</h1>
        <p className='text-center font-semibold text-lg text-[#fff] text-2xl'>Let Make a life saving impact together.</p>
        <AddOForm />
        {/* <div className='mx-auto max-w-2xl absolute bottom-20 flex flex-col gap-5 justify-center align-middle '>
            <h1 className='text-3xl font-extrabold text-[#fff]'>Home is Life </h1>
            <p className='text-lg text-[#fff] '>We build strength, stability and self reliance through shelter.</p>
            <button>Act Now</button>
            <div className='flex justify-center align-middle'>
              <AddOForm />
            </div>
            
        </div> */}
    </div>
  )
}

export default MainHero