import Navbar from '../components/Navbar'
import MainHero from '../components/HeroSection/MainHero'
import TeamCard from '../components/LitComponent/TeamCard'
import HomeStep from '../components/HomeStep'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <MainHero />
        <TeamCard />
        <HomeStep />
        <Footer />
    </div>
  )
}

export default Home