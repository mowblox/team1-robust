import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useTheme} from 'next-themes'
import {
  FaMoon,
  FaSun
} from 'react-icons/fa'
// import {} from ''
import {ToastContainer} from 'react-toastify'
import Chat from 'react-simple-chatbot'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';



function App() {
  const {theme, systemTheme, setTheme} = useTheme()

  const darkMode = () => {
    const mode = theme === 'system' ? systemTheme : theme;

    if(mode === 'dark') {
      return(
        <FaMoon role='button' color='red' onClick={() => setTheme('light')}/>
      )
    }else {
      return(
        <FaSun role='button' color='red' onClick={() => setTheme('dark')} />
      )
    }
  }

  return (
    <BrowserRouter>
      <div style={{position: 'fixed', top: '50%', right: '5%', zIndex: '10'}}>{darkMode()}</div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
