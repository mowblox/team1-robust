import Navbar from '../components/Navbar'
import MainHero from '../components/HeroSection/MainHero'
import TeamCard from '../components/LitComponent/TeamCard'
import HomeStep from '../components/HomeStep'
import Footer from '../components/Footer'
import AddOForm from '../components/Forms/AddOForm'

const Home = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <MainHero />
        <AddOForm />
        <TeamCard />
        <HomeStep />
        <Footer />
    </div>
  )
}

export default Home