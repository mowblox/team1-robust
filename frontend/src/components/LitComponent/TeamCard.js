import '../../App.css'
import {
    FaFacebookF,
    FaLinkedin,
    FaTwitter,
    FaPinterest
} from 'react-icons/fa'

const TeamCard = () => {
  return (
    <div className='team-card-div rounded w-60 relative'>
        <img src='/assets/blog1.png' alt='image' className='w-full rounded-lg'/>
        <div className='team-details absolute bottom-4 flex flex-col justify-center align-middle mx-auto'>
            <h3>Dan Jones</h3>
            <p>Senior Supervisor</p>
            <div className='flex '>
                <FaFacebookF />
                <FaLinkedin />
                <FaTwitter />
                <FaPinterest />
            </div>
        </div>
    </div>
  )
}

export default TeamCard