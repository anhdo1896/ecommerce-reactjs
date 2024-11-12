import { useContext } from "react";
import { Link } from "react-router-dom";
import path from "src/constants/path";
import { MobileContext } from "src/contexts/mobile.context";

export default function NavBottom() {
  const { isSort, setIsSort, isFilter, setIsFilter, isSearch, setIsSearch } = useContext(MobileContext)

  const setToggle = (key: string) => {
    switch (key) {
      case 'sort':
        setIsSort(!isSort)
        setIsFilter(false)
        setIsSearch(false)
        break;
      case 'filter':
        setIsFilter(!isFilter)
        setIsSort(false)
        setIsSearch(false)
        break;
      case 'search':
        setIsSearch(!isSearch)
        setIsFilter(false)
        setIsSort(false)
        break;
      default:
        break;
    }

  }

  return (
    <div className='block lg:hidden fixed bottom-0 left-0 bg-white h-16 w-full border-black shadow-2xl'>
      <div className='container grid grid-cols-12 gap-6 h-full place-items-center'>
        <button onClick={() => setToggle('sort')} className='col-span-3 cursor-pointer hover:text-pink-500 p-4'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6 '
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75'
            />
          </svg>
        </button>
        <button onClick={() => setToggle('filter')} className='col-span-3 cursor-pointer hover:text-pink-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
          </svg>
        </button>
        <button onClick={() => setToggle('search')} className='col-span-3 cursor-pointer hover:text-pink-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
        </button>
        <Link to={path.cart} className='col-span-3 cursor-pointer hover:text-pink-500'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
