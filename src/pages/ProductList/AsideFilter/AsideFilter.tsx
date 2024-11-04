import { createSearchParams, Link, useNavigate } from 'react-router-dom'
import Button from 'src/components/Button'
import path from 'src/constants/path'
import { Category } from 'src/types/category.type'
import classNames from 'classnames'
import { Brand } from 'src/types/brand.type'
import InputNumber from 'src/components/InputNumber'
import { useForm, Controller } from 'react-hook-form'
import { Schema, schema } from 'src/utils/rules'
import { yupResolver } from '@hookform/resolvers/yup'
import { NonUndefinedField } from 'src/types/utils.type'
import omit from 'lodash/omit'
import RatingStars from 'src/components/RatingStars'
import { QueryConfig } from 'src/hooks/useQueryConfig'
import { useTranslation } from 'react-i18next'

interface Props {
  queryConfig: QueryConfig
  categories: Category[]
  brands: Brand[]
}

type FormData = NonUndefinedField<Pick<Schema, 'price_max' | 'price_min'>>
const priceSchema = schema.pick(['price_min', 'price_max'])

export default function AsideFilter({ queryConfig, categories, brands }: Props) {
  const { t } = useTranslation('home')
  const {
    control,
    handleSubmit,
    trigger,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      price_min: '',
      price_max: ''
    },
    resolver: yupResolver(priceSchema)
  })

  const navigate = useNavigate()

  const isActiveCategory = (category: Category) => {
    return category.id.toString() === queryConfig.categoryId
  }
  const isActiveBrand = (brand: Brand) => {
    return brand.id.toString() === queryConfig.brandId
  }

  const onSubmit = handleSubmit((data) => {
    navigate({
      pathname: path.home,
      search: createSearchParams({
        ...queryConfig,
        priceMin: data.price_min,
        priceMax: data.price_max
      }).toString()
    })
  })

  const removeFilter = () => {
    reset()
    navigate({
      pathname: path.home,
      search: createSearchParams(
        omit(queryConfig, ['priceMax', 'priceMin', 'ratingNumber', 'categoryId', 'brandId'])
      ).toString()
    })
  }

  return (
    <div className='py-4'>
      <span className={classNames('flex items-center font-bold')}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6 mr-3'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
        </svg>
        {t('aside filter.all categories')}
      </span>
      <div className='border-b-2 border-gray-300 h-[1px] my-4'></div>
      <ul className='my-4'>
        <li className='py-2 pl-2'>
          <Link
            to={{
              pathname: path.home,
              search: createSearchParams(omit(queryConfig, 'categoryId')).toString()
            }}
            className={classNames('relative px-3', {
              'text-pink-500 font-semibold': !queryConfig.categoryId,
              'text-gray-500': queryConfig.categoryId
            })}
          >
            {!queryConfig.categoryId ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4 absolute top-0 left-[-10px] fill-pink-500'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4 absolute top-0 left-[-10px] fill-pink-500'
              ></svg>
            )}
            All
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category.id} className='py-2 pl-2'>
            <Link
              to={{
                pathname: path.home,
                search: createSearchParams({
                  ...queryConfig,
                  categoryId: category.id.toString()
                }).toString()
              }}
              className={classNames('relative px-3', {
                'text-pink-500 font-semibold': isActiveCategory(category),
                'text-gray-500': !isActiveCategory(category)
              })}
            >
              {isActiveCategory(category) ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-4 absolute top-0 left-[-10px] fill-pink-500'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-4 absolute top-0 left-[-10px] fill-pink-500'
                ></svg>
              )}
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
      <span className={classNames('flex items-center font-bold')}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6 mr-3'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z'
          />
        </svg>
        {t('aside filter.all brands')}
      </span>
      <div className='border-b-2 border-gray-300 h-[1px] my-4'></div>
      <ul className='my-4'>
        <li className='py-2 pl-2'>
          <Link
            to={{
              pathname: path.home,
              search: createSearchParams(omit(queryConfig, 'brandId')).toString()
            }}
            className={classNames('relative px-3', {
              'text-pink-500 font-semibold': !queryConfig.brandId,
              'text-gray-500': queryConfig.brandId
            })}
          >
            {!queryConfig.brandId ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4 absolute top-0 left-[-10px] fill-pink-500'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-4 absolute top-0 left-[-10px] fill-pink-500'
              ></svg>
            )}
            All
          </Link>
        </li>
        {brands.map((brand) => (
          <li key={brand.id} className='py-2 pl-2'>
            <Link
              to={{
                pathname: path.home,
                search: createSearchParams({
                  ...queryConfig,
                  brandId: brand.id.toString()
                }).toString()
              }}
              className={classNames('relative px-3', {
                'text-pink-500 font-semibold': isActiveBrand(brand),
                'text-gray-500': !isActiveBrand(brand)
              })}
            >
              {isActiveBrand(brand) ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-4 absolute top-0 left-[-10px] fill-pink-500'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-4 absolute top-0 left-[-10px] fill-pink-500'
                ></svg>
              )}
              {brand.name}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={path.home} className='flex items-center font-bold'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='size-6 mr-3'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z'
          />
        </svg>
        Filters
      </Link>
      <div className='border-b-2 border-gray-300 h-[1px] my-4'></div>
      <div className='relative py-4'>Price Range</div>
      <form className='mt-2' noValidate onSubmit={onSubmit}>
        <div className='flex items-start'>
          <Controller
            control={control}
            name='price_min'
            render={({ field }) => (
              <InputNumber
                type='text'
                className='grow'
                placeholder='AUD From'
                classNameError='hidden'
                classNameInput='p-1 outline-none w-full border boder-gray-300 focus:boder-gray-500 rounded-sm focus:shadow-md'
                {...field}
                onChange={(event) => {
                  field.onChange(event)
                  trigger('price_max')
                }}
              />
            )}
          />

          <div className='mx-2 mt-2 shrink-0'>-</div>
          <Controller
            control={control}
            name='price_max'
            render={({ field }) => (
              <InputNumber
                type='text'
                className='grow'
                placeholder='AUD To'
                classNameError='hidden'
                classNameInput='p-1 outline-none w-full boder-gray-300 focus:boder-gray-500 rounded-sm focus:shadow-md'
                {...field}
                onChange={(event) => {
                  field.onChange(event)
                  trigger('price_min')
                }}
              />
            )}
          />
          {/* <InputNumber
            type='text'
            className='grow'
            name='To'
            placeholder='AUD To'
            classNameInput='p-1 outline-none w-full boder-gray-300 focus:boder-gray-500 rounded-sm focus:shadow-md'
          /> */}
        </div>
        <div className='text-center mt-1 text-red-600 min-h-[0.9rem] text-sm'>{errors.price_min?.message}</div>

        <Button className='w-full p-2 uppercase text-white justify-center items-center bg-pink-500 hover:bg-pink-500/90'>
          Apply
        </Button>
      </form>
      <div className='relative py-4'>Rating</div>
      <RatingStars queryConfig={queryConfig} />
      <div className='border-b-2 border-gray-300 h-[1px] my-4'></div>
      <Button
        onClick={removeFilter}
        className='w-full p-2 uppercase text-white justify-center items-center bg-pink-500 hover:bg-pink-500/90 '
      >
        Reset all
      </Button>
    </div>
  )
}
