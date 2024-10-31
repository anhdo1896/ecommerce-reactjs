import { Link } from 'react-router-dom'
import { logo } from 'src/assets'
export default function RegisterHeader() {
  return (
    <Link className='w-50 mx-auto' to='/'>
      <img src={logo} alt='shop' className='w-20 h-20 object-contain block mx-auto w-20' />
    </Link>
  )
}
