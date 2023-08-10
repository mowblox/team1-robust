import React from 'react'
import '../../App.css'
const AbtHero = ({children}) => {
  return (
    <div className='hero-grp p-20 '>
        <h1 className='text-[#000] font-extrabold text-3xl'>{children}</h1>

    </div>
  )
}

export default AbtHero