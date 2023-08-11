import {Link} from 'react-router-dom'
import {useTheme} from 'next-themes'
import {
    FaBars,
    FaTimes,
    FaMoon,
    FaSun
} from 'react-icons/fa'
import { useRef, useState } from 'react'
import '../App.css'

const Navbar = () => {
    const NavRef = useRef()
    const {systemTheme, theme, setTheme} = useTheme()

    const darkMode = () => {
        const mode = theme === 'system' ? systemTheme : theme

        if(mode === 'dark') {
            return (
                <FaMoon color='red' onClick={() => setTheme('light')}/>
            )
        }else {
            return (
                <FaSun color='red' onClick={() => setTheme('dark')}/>
            )
        }
    }

    const showNavbar = () => {
        NavRef.current.classList.toggle('switch')
    }

    // Change Navbar color when scrolling 
    const [color, setColor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor);

  return (
    <div className='flex justify-between align-middle px-4 py-2' style={{backgroundColor: color ? 'black' : ''}}>
        <Link to='/' className='font-bold'>Logo</Link>
        <nav className='flex' ref={NavRef}>
            <div>{darkMode()}</div>
            <Link to='/about' className='me-2'>About</Link>
            <Link to='/contact' className='me-2'>Contact</Link>
            <Link to='/pricing' className='me-2'>Price Table</Link>
            <Link to='/gallery' className='me-2'>Gallery</Link>
            
            <div className='nav-mob-btn'>
                <button>Donate</button>
                <button>Voluteer</button>
            </div>
            <FaTimes onClick={showNavbar} size={25}/>
        </nav>
        <div>
            <button>Donate</button>
            <button>Voluteer</button>
        </div>
        <FaBars onClick={showNavbar} size={25} />
    </div>
  )
}

export default Navbar