import { Link } from 'react-router-dom'
import path from 'src/constants/path'
import ProductRating from 'src/pages/ProductRating'
import { type Product } from 'src/types/product.type'
import { formatCurrency, formatNumberToSocialStyle, generateNameId } from 'src/utils/utils'

interface Props {
  product: Product
}
export default function Product({ product }: Props) {
  return (
    <Link to={`${path.home}${generateNameId({ name: product.name, id: product.id })}`}>
      <div className='bg-white shadow rounded-sm hover:translate-y-[-0.0625rem] hover:shadow-md duration-100 transition-transform overflow-hidden'>
        <div className='w-full pt-[100%] relative'>
          <img
            src={product.images[0] && product.images[0].url}
            alt=''
            className='absolute top-0 left-0 bg-white w-full h-full object-cover'
          />
        </div>
        <div className='p-2 overflow-hidden'>
          <div className='min-h-[2rem] line-clamp-2 text-xs'>{product.name}</div>
          <div className='flex items-center mt-3'>
            {product.priceBeforeDiscount !== product.price && (
              <div className='line-through max-w-[50%] text-gray-500 truncate'>
                <span className='text-sm'>AUD</span>
                <span className='text-sm'>{product.priceBeforeDiscount}</span>
              </div>
            )}

            <div className='text-pink-500 truncate ml-1'>
              <span className='text-xs'>AUD</span>
              <span>{formatCurrency(product.price)}</span>
            </div>
          </div>
        </div>
        <div className='p-2 flex items-center justify-start'>
          <ProductRating rating={product.rating} />
          <div className='mx-2 text-sm'>
            <span className=''>{formatNumberToSocialStyle(product.sold)}</span>
            <span className='ml-1'>Sold</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
