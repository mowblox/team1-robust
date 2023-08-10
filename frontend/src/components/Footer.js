import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex flex-wrap bg-[#000] text-[#fff] px-10 py-20'>
        <div className='w-80'>
            <h1>Logo</h1>
            <p>Towards the end of the 19th century, with the advent of the New Liberalism and the innovative</p>
        </div>
        <div className='w-80'>
            <h2>Contact Info</h2>
            <Link to=''>About Our Organisation</Link>
            <Link to=''>Become a Voluteer</Link>
        </div>
        <div className='w-80'>
            <h2>Quick Links</h2>
            <div>
                <Link to='/about'>About Our Organisation</Link>
                <Link to=''>Become a Voluteer</Link>
                <Link to=''></Link>
            </div>
        </div>
        <div className='w-80'>

        </div>
    </div>
  )
}

export default Footer