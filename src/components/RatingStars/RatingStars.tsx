import classNames from 'classnames'
import { createSearchParams, useNavigate } from 'react-router-dom'
import path from 'src/constants/path'
import { QueryConfig } from 'src/hooks/useQueryConfig'


interface Props {
  queryConfig: QueryConfig
}

export default function RatingStars({ queryConfig }: Props) {
  const navigate = useNavigate()

  const filterStars = (ratingNumber: number) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        ratingNumber: String(ratingNumber)
      }).toString()
    })
  }

  return (
    <div>
      <div>
        <ul>
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <li key={`star-${index}`}>
                <div
                  onClick={() => filterStars(5 - index)}
                  className={classNames('flex items-center p-2 text-sm cursor-pointer', {
                    'bg-pink-100': Number(queryConfig.ratingNumber) === 5 - index,
                    'hover:bg-pink-100': Number(queryConfig.ratingNumber) !== 5 - index
                  })}
                  tabIndex={0}
                  role='button'
                  aria-hidden='true'
                >
                  {Array.from({ length: 5 }).map((_, indexStars) => {
                    if (indexStars < 5 - index) {
                      return (
                        <svg
                          key={'innerStar' + index + indexStars}
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={0.5}
                          stroke='currentColor'
                          className='size-5 mr-2 fill-yellow-500'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                          />
                        </svg>
                      )
                    } else {
                      return (
                        <svg
                          key={'innerStar' + index + indexStars}
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={0.5}
                          stroke='currentColor'
                          className='size-5 mr-2'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
                          />
                        </svg>
                      )
                    }
                  })}
                  {index > 0 ? <span className='font-semibold'>Up to</span> : ''}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  )
}
