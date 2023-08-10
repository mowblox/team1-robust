import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {useTheme} from 'next-themes'
import {
  FaMoon,
  FaSun
} from 'react-icons/fa'
// import {} from ''
import {ToastContainer} from 'react-toastify'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pricing from './pages/Pricing';
import Gallery from './pages/Gallery';



function App() {
  // const [themes, systemThemes, setThemes] = useTheme()

  // const darkMode = () => {
  //   const mode = themes === 'system' ? systemThemes : themes;

  //   if(mode === 'dark') {
  //     return(
  //       <FaMoon color='red' on/>
  //     )
  //   }else {
  //     return(
  //       <FaSun color='red' />
  //     )
  //   }
  // }

  return (
    <BrowserRouter>
      {/* <div style={{position: 'absolute', top: '30px', right: '10px', zIndex: '10'}}>{darkMode}</div> */}
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
