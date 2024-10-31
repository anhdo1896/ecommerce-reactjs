import { Link } from 'react-router-dom'
import NavHeader from '../NavHeader'
import { logo } from 'src/assets'
import useSearchProducts from 'src/hooks/useSearchProducts'

export default function CartHeader() {
  const searchProducts = useSearchProducts()
  return (
    <div className='border-b border-b-black bg-pink-500 text-white'>
      <div className='container'>
        <NavHeader />
      </div>
      <div className='bg-white py-6'>
        <div className='container'>
          <div className='md:flex md:items-center md:justify-between'>
            <Link className='flex flex-shrink-0 items-center' to='/'>
              <div>
                <img src={logo} alt='shop' className='w-20 h-20 object-contain' />
              </div>
              <div className='mx-4 h-8 w-[2px] bg-pink-300'></div>
              <div className='text-lg text-pink-500 font-semibold'>Cart</div>
            </Link>
            <form className='mt-3 md:mt-0 md:w-[50%] border-2 border-pink-500' onSubmit={searchProducts.onSubmit}>
              <div className='flex bg-white rounded-sm'>
                <input
                  type='text'
                  className='text-black px-3 py-2 border-none outline-none bg-transparent flex-grow'
                  placeholder='Search for products'
                  {...searchProducts.register('search')}
                />
                <button className='bg-pink-500 rounded-sm py-2 px-6 flex-shrink-0 hover:opacity-90'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
