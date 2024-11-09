import { Link } from 'react-router-dom'
import { logo } from 'src/assets'

export default function Footer() {
  return (
    <div className=' py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-5'>
          <div className='lg:col-1'>
            <Link to='/'>
              <img src={logo} alt='shop' className='w-20 h-20 object-contain' />
            </Link>
          </div>
          <div className='lg:col-1'>
            <div className='flex flex-col'>
              <h2 className='font-bold py-2'>About Us</h2>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Company info</Link>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>News</Link>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Careers</Link>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Policy</Link>

            </div>
          </div>
          <div className='lg:col-1'>
            <div className='flex flex-col'>
              <h2 className='font-bold py-2'>Payment Info</h2>
              <Link className='hover:text-pink-500 py-2' to='https://stripe.com/au'>Stripe Payments</Link>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Stripe Payment Processing</Link>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Security at Stripe</Link>
            </div>
          </div>
          <div className='lg:col-1'>
            <div className='flex flex-col'>
              <h2 className='font-bold py-2'>Help & Contact</h2>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Your account</Link>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Returns</Link>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Assisstant</Link>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Help</Link>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Connect us</Link>
            </div>
          </div>
          <div className='lg:col-1'>
            <div className='flex flex-col'>
              <h2 className='font-bold py-2'>Resource</h2>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Images</Link>
              <Link className='hover:text-pink-500 py-2' to='https://anhdongoc.com'>Gallery</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
