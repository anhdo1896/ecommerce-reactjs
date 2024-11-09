import { sortBy } from 'src/constants/products'
import { ProductListConfig } from 'src/types/product.type'
import classNames from 'classnames'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { QueryConfig } from 'src/hooks/useQueryConfig'
import { useContext } from 'react'
import { MobileContext } from 'src/contexts/mobile.context'

interface Props {
  queryConfig: QueryConfig
  pageSize: number
}

export default function SortProductList({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.pageIndex)
  const { sort = sortBy.name } = queryConfig
  const navigate = useNavigate()
  const { isSort } = useContext(MobileContext)


  const isActiveSortBy = (sortByValue: Exclude<ProductListConfig['sort'], undefined>) => {
    return sortByValue === sort || (sortByValue === sortBy.priceAsc && sort.includes('price'))
  }

  const handleSort = (sortByValue: Exclude<ProductListConfig['sort'], undefined>) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        sort: sortByValue,
        pageIndex: '1'
      }).toString()
    })
  }


  return (
    <div className={classNames('lg:static lg:block bg-gray-300 py-4 px-3', {
      'w-full  fixed left-0 bottom-16 z-[100]  bg-gray-300': isSort,
      'hidden': !isSort
    })}>
      <div className='flex flex-wrap items-center gap-2 justify-between'>
        <div className='flex flex-wrap items-center gap-2'>
          <div className='hidden lg:block'>Sort by</div>
          <button
            className={classNames('h-8 px-4   apitalize text-sm text-center hover:bg-pink-500/80 hover:text-white', {
              'bg-pink-500 text-white': isActiveSortBy(sortBy.view),
              'bg-white text-black': !isActiveSortBy(sortBy.view)
            })}
            onClick={() => handleSort(sortBy.view)}
          >
            Popular
          </button>
          <button
            className={classNames('h-8 px-4  apitalize text-sm text-center hover:bg-pink-500/80 hover:text-white', {
              'bg-pink-500 text-white': isActiveSortBy(sortBy.name),
              'bg-white text-black': !isActiveSortBy(sortBy.name)
            })}
            onClick={() => handleSort(sortBy.name)}
          >
            Name
          </button>
          <button
            className={classNames('h-8 px-4   apitalize text-sm text-center hover:bg-pink-500/80 hover:text-white', {
              'bg-pink-500 text-white': isActiveSortBy(sortBy.sold),
              'bg-white text-black': !isActiveSortBy(sortBy.sold)
            })}
            onClick={() => handleSort(sortBy.sold)}
          >
            Best seller
          </button>

          <select
            className={classNames('h-8 px-4 outline-none', {
              'bg-pink-500 text-white': isActiveSortBy(sortBy.priceAsc),
              'bg-white text-black': !isActiveSortBy(sortBy.priceAsc)
            })}
            value={sort == sortBy.priceAsc || sort == sortBy.priceDesc ? sort : ''}
            onChange={(event) => handleSort(event.target.value as Exclude<ProductListConfig['sort'], undefined>)}
          >
            <option value='' className='bg-white' disabled>
              Price
            </option>
            <option className='bg-white text-black' value={sortBy.priceAsc}>
              Low to high
            </option>
            <option className='bg-white text-black' value={sortBy.priceDesc}>
              High to low
            </option>
          </select>
        </div>
        <div className='hidden lg:flex items-center'>
          <div className='mr-2'>
            <span className='text-pink-500'>{page}</span>/{pageSize}
          </div>
          <div className='flex'>
            {page === 1 ? (
              <span className=' flex items-center cursor-not-allowed h-8 px-3 rounded-tl-sm bg-slate-200 border border-gray-300   '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                </svg>
              </span>
            ) : (
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    pageIndex: (page - 1).toString()
                  }).toString()
                }}
                className='h-8 px-3 rounded-tl-sm bg-white border border-r-1 hover:bg-gray-200 flex items-center'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                </svg>
              </Link>
            )}
            {page === pageSize ? (
              <span className='flex items-center h-8 px-3 rounded-tl-sm bg-slate-200 border border-gray-300  cursor-not-allowed  '>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                </svg>
              </span>
            ) : (
              <Link
                to={{
                  pathname: path.home,
                  search: createSearchParams({
                    ...queryConfig,
                    pageIndex: (page + 1).toString()
                  }).toString()
                }}
                className='h-8 px-3 rounded-tl-sm bg-white border border-l-1 hover:bg-gray-200 flex items-center '
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-3'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div >
  )
}
