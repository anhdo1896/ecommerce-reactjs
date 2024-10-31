import { Link } from 'react-router-dom'
import { logo } from 'src/assets'

export default function Footer() {
  return (
    <div className='bg-neutral-100 py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-5'>
          <div className='lg:col-1'>
            <Link to='/'>
              <img src={logo} alt='shop' className='w-20 h-20 object-contain' />
            </Link>
          </div>
          <div className='lg:col-1'>
            <div className='flex flex-col'>
              <span>About The Company Investors Careers at Aerometrex</span>
              <span>Solutions 3D Modelling Aerial LiDAR MetroMap</span>
            </div>
          </div>
          <div className='lg:col-1'>
            <div className='flex flex-col'>
              <span>
                Industries Architecture, Engineering & Construction Energy & Utilities Environment and Disaster
                Management Events, Media & Entertainment Forestry & Agriculture Government Insurance & Financial
                Services Natural Resources, Mining & Exploration Property & Real Estate Telecommunications Transport,
                Logistics and Traffic Management
              </span>
            </div>
          </div>
          <div className='lg:col-1'>
            <div className='flex flex-col'>
              <span>Resources Blog Gallery Projects Webinars Newsroom FAQ's Contact us Switch to USA Site</span>
            </div>
          </div>
          <div className='lg:col-1'>
            <div className='flex flex-col'>
              <span>Resources Blog Gallery Projects Webinars Newsroom FAQ's Contact us Switch to USA Site</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
