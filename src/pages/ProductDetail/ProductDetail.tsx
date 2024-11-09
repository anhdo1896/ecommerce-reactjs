import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import productApi from 'src/apis/product.api'
import ProductRating from '../ProductRating'
import { formatCurrency, formatNumberToSocialStyle, getIdFronNameId, rateSale } from 'src/utils/utils'
import DOMPurify from 'dompurify'
import { useContext, useEffect, useMemo, useRef, useState } from 'react'
import { Product as ProductType, ProductListConfig } from 'src/types/product.type'
import Product from '../ProductList/Product'
import QuantityController from 'src/components/QuantityController'
import { AppContext } from 'src/contexts/app.context'
import cartApi from 'src/apis/cart.api'
import { Cart, CartDetail, CartHeader } from 'src/types/cart.type'
import path from 'src/constants/path'
import { toast } from 'react-toastify'

export default function ProductDetail() {
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { nameId } = useParams()
  const id = getIdFronNameId(nameId as string)

  const [currentIndexImage, setCurrentIndexImage] = useState([0, 5])
  const [activeImage, setActiveImage] = useState('')
  const imageRef = useRef<HTMLImageElement>(null)

  const [buyCount, setBuyCount] = useState(1)
  const { profile } = useContext(AppContext)

  const { data: productDetailData } = useQuery({
    queryKey: ['productDetail', id],
    queryFn: () => productApi.getProductDetail(id as string),
    staleTime: 3 * 60 * 1000
  })

  const product = productDetailData?.data.data

  const queryConfig: ProductListConfig = { pageIndex: 1, pageSize: 20, categoryId: product?.categoryId }

  const { data: productList } = useQuery({
    queryKey: ['product', queryConfig],
    queryFn: () => {
      return productApi.getProduct(queryConfig as ProductListConfig)
    },
    enabled: Boolean(product),
    staleTime: 3 * 60 * 1000
  })

  const currentImages = useMemo(() => {
    return product ? product?.images.slice(...currentIndexImage) : []
  }, [product, currentIndexImage])

  const addToCartMutation = useMutation({
    mutationFn: (body: Cart) => cartApi.addToCart(body)
  })

  useEffect(() => {
    if (product && product.images.length > 0) {
      setActiveImage(product.images[0].url)
    }
  }, [product])

  const chooseActiveImage = (img: string) => {
    setActiveImage(img)
  }

  const next = () => {
    if (currentIndexImage[1] < (product as ProductType).images.length) {
      setCurrentIndexImage((prev) => [prev[0] + 1, prev[1] + 1])
    }
  }

  const previous = () => {
    if (currentIndexImage[0] > 0) {
      setCurrentIndexImage((prev) => [prev[0] - 1, prev[1] - 1])
    }
  }

  const handleZoom = (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    // const rect = event.currentTarget.getBoundingClientRect()
    // const image = imageRef.current as HTMLImageElement
    // const { naturalHeight, naturalWidth, width, height } = image
    // const offsetX = event.pageX - (rect.x + window.scrollX)
    // const offsetY = event.pageY - (rect.y + window.scrollY)
    // const top = offsetY * (1 - (height * 2 < naturalHeight ? naturalHeight / 2 : naturalHeight + 400) / rect.height)
    // const left = offsetX * (1 - (width * 2 < naturalWidth ? naturalWidth / 2 : naturalWidth + 400) / rect.width)
    // image.style.width = naturalWidth > width * 2 ? naturalWidth / 3 + 'px' : naturalWidth + 200 + 'px'
    // image.style.height = naturalHeight > height * 2 ? naturalHeight / 3 + 'px' : naturalHeight + 200 + 'px'
    // image.style.maxWidth = 'unset'
    // image.style.top = top + 'px'
    // image.style.left = left + 'px'
  }

  const resetZoom = () => {
    imageRef.current?.removeAttribute('style')
  }

  const handleBuyCount = (value: number) => {
    setBuyCount(value)
  }

  const addToCart = () => {
    if (!profile) {
      navigate(path.login)
    } else {
      const cartHeader: CartHeader = {
        userId: profile.id
      }
      const carDetails: CartDetail[] = [
        {
          product: product as ProductType,
          count: buyCount,
          productId: product?.id as string,
          cartHeader: cartHeader
        }
      ]
      addToCartMutation.mutate(
        { cartHeader: cartHeader, cartDetails: carDetails },
        {
          onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['purchase'] })
            toast.success('Added success')
          }
        }
      )
    }
  }

  const buyNow = async () => {
    if (!profile) {
      navigate(path.login)
    } else {
      const cartHeader: CartHeader = {
        userId: profile.id
      }
      const carDetails: CartDetail[] = [
        {
          product: product as ProductType,
          count: buyCount,
          productId: product?.id as string,
          cartHeader: cartHeader
        }
      ]
      const res = await addToCartMutation.mutateAsync({ cartHeader: cartHeader, cartDetails: carDetails })

      const purchase = res.data.data
      navigate(path.cart, {
        state: {
          purchaseId: purchase.cartDetails[0].productId
        }
      })
    }
  }

  if (!product) return null

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container '>
        <div className='bg-white p-4 shadow'>
          <div className='grid grid-cols-12 md:gap-9'>
            <div className='col-span-12 lg:col-span-5'>
              <div className='relative w-full pt-[100%] shadow overflow-hidden'>
                <img
                  src={activeImage}
                  alt={product.name}
                  className='absolute top-0 left-0 bg-white w-full h-full object-cover'
                  onMouseMove={handleZoom}
                  onMouseLeave={resetZoom}
                  ref={imageRef}
                />
              </div>
              <div className='relative mt-4 grid grid-cols-5 gap-1'>
                <button
                  className='absolute left-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                  onClick={previous}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5 8.25 12l7.5-7.5' />
                  </svg>
                </button>
                {currentImages.map((image, index) => {
                  const isActive = image.url === activeImage
                  return (
                    <div
                      className='relative w-full pt-[100%] cursor-pointer'
                      key={image.url + index}
                      onClick={() => chooseActiveImage(image.url)}
                    >
                      <img
                        src={image.url}
                        alt={product.name}
                        className='absolute top-0 left-0 bg-white w-full h-full object-cover'
                      />
                      {isActive && (
                        <div
                          className='absolute inset-0   border-pink-400 border-2
                   w-full h-full'
                        ></div>
                      )}
                    </div>
                  )
                })}
                <button
                  className='absolute right-0 top-1/2 z-10 h-9 w-5 -translate-y-1/2 bg-black/20 text-white'
                  onClick={next}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='m8.25 4.5 7.5 7.5-7.5 7.5' />
                  </svg>
                </button>
              </div>
            </div>
            <div className='col-span-12 md:col-span-7'>
              <h1 className='text-xl font-medium uppercase'>{product.name}</h1>
              <div className='mt-8 flex items-center'>
                <div className='flex items-center'>
                  <span className='mr-1 border-b border-b-pink-300 text-pink-500'>{product.rating}</span>
                  <ProductRating
                    rating={product.rating}
                    classActive='fill-pink-500 text-pink-500 h-4 w-4'
                    classNonActive='fill-gray-400 text-gray-400 h-4 w-4'
                  />
                </div>
                <div className='mx-4 h-4 w-[1px] bg-gray-400'></div>
                <div>
                  <span>{formatNumberToSocialStyle(product.sold)}</span>
                  <span className='ml-1 text-gray-500'>Sold</span>
                </div>
              </div>

              {product.priceBeforeDiscount && product.priceBeforeDiscount !== product.price ? (
                <div className='mt-8 flex items-center bg-gray-100 px-5 py-4'>
                  <div className='text-gray-500 line-through'>AUD{formatCurrency(product.priceBeforeDiscount)}</div>
                  <div className='ml-3 text-xl md:text-3xl font-medium text-pink-500'>AUD{formatCurrency(product.price)}</div>
                  <div className='ml-4 rounded-sm bg-pink-500 text-white px-1 py-[2px] text-xs font-semibold uppercase'>
                    {rateSale(product.priceBeforeDiscount, product.price)} sale
                  </div>
                </div>
              ) : (
                <div className='mt-8 flex items-center bg-gray-100 px-5 py-4'>
                  <div className='ml-3 text-3xl font-medium text-pink-500'>AUD{formatCurrency(product.price)}</div>
                </div>
              )}

              <div className='mt-8 flex items-center'>
                <div className='capitalize text-gray-500'>Quantity</div>
                <QuantityController
                  onIncrease={handleBuyCount}
                  onDecrease={handleBuyCount}
                  onType={handleBuyCount}
                  value={buyCount}
                  max={product.quantity}
                />
                <div className='ml-2 md:ml-6 text-sm text-gray-500 '> {product.quantity} in stock</div>
              </div>

              <div className='mt-8 flex items-center'>
                <button
                  className='flex justify-center items-center mt-4 text-pink-500 bg-pink-200 px-5 border border-pink-300 py-2 hover:bg-pink-100'
                  onClick={addToCart}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6 mr-2'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                    />
                  </svg>
                  Add to the cart
                </button>
                <button className='mt-4 mx-1 md:mx-6 px-5 py-3  bg-pink-500 text-white hover:bg-pink-400' onClick={buyNow}>
                  Buy now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='mt-8 bg-white p-4 shadow'>
          <div className='rounded bg-gray-50 p-4 text-xl capitalize'>Description</div>
          <div className='mx-4 mt-12 mb-4 text-sm leading-loose'>
            <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }}></div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='mt-8 bg-white p-2 md:p-4'>
          <div className='text-xl'>Similar products</div>
          <div className='mt-6 grid grid-cols-2  lg:grid-cols-4 xl:grid-cols-6 gap-2 md:gap-4'>
            {productList &&
              productList.data.data.data.map((product) => (
                <div className='col-span-1' key={product.id}>
                  <Product product={product} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}
