import AsideFilter from './AsideFilter/AsideFilter'
import Product from './Product'
import { useMutation, useQuery } from '@tanstack/react-query'
import productApi from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import { ProductListConfig } from 'src/types/product.type'
import SortProductList from './SortProductList'
import categoryApi from 'src/apis/category.api'
import brandsApi from 'src/apis/brand.api'
import useQueryConfig from 'src/hooks/useQueryConfig'
import NavBottom from 'src/components/NavBottom'
import { useContext, useEffect, useState } from 'react'
import { MobileContext } from 'src/contexts/mobile.context'
import noproduct from 'src/assets/images/NO-PRODUCT.png'
import orderApi from 'src/apis/order.api'
import { toast } from 'react-toastify'
import OrderStatusCode from 'src/constants/orderStatus.enum'

export default function ProductList() {
  const queryConfig = useQueryConfig()
  const { setIsSort, setIsFilter, setIsSearch } = useContext(MobileContext)
  const [, setMessage] = useState('')

  const { data, isLoading } = useQuery({
    queryKey: ['product', queryConfig],
    queryFn: () => {
      setIsFilter(false)
      setIsSort(false)
      setIsSearch(false)
      return productApi.getProduct(queryConfig as ProductListConfig)
    },
    placeholderData: (prev) => prev,
    staleTime: 3 * 60 * 1000
  })

  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategories()
    }
  })

  const { data: brandsData } = useQuery({
    queryKey: ['brands'],
    queryFn: () => {
      return brandsApi.getBrands()
    }
  })

  const validateStripeSessionMutation = useMutation({
    mutationFn: (body: number) => orderApi.validateStripeSession(body)
  })

  const updateOrderStatus = useMutation({
    mutationFn: (body: { orderId: number; newStatus: string }) =>
      orderApi.updateorderstatus(body.orderId, body.newStatus)
  })

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      const orderId = Number(query.get('orderId'))
      validateStripeSessionMutation.mutate(orderId)
      setMessage('Order succeeed')
      toast.success('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      const orderId = Number(query.get('orderId'))

      setMessage("Order canceled -- continue to shop around and checkout when you're ready.")
      updateOrderStatus.mutate({ orderId: orderId, newStatus: OrderStatusCode.Status_Cancelled })
      toast.warning("Order canceled -- continue to shop around and checkout when you're ready.")
    }
  }, [])

  return (

    <div className='min-h-[50%] bg-gray-200 py-6'>
      <div className='container'>
        <div className='realtive grid grid-cols-12 gap-4'>
          <div className='lg:col-span-3'>
            <AsideFilter
              queryConfig={queryConfig}
              categories={categoriesData?.data.data ? categoriesData?.data.data : []}
              brands={brandsData?.data.data ? brandsData?.data.data : []}
            />
          </div>
          {
            isLoading && (
              <div className="absolute top-[50%] left-[50%]">
                <div role="status">
                  <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            )

          }
          {data && (
            <div className='col-span-12 lg:col-span-9'>
              <SortProductList
                queryConfig={queryConfig}
                pageSize={Math.ceil(data?.data.data.count / data.data.data.pageSize)}
              />

              {
                data && data.data.data.count <= 0 && (
                  <div className='text-center'>
                    <img className='m-auto' src={noproduct} />
                    <div className='my-5'>
                    </div>
                  </div>
                )
              }
              <div className='mt-6 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
                {data.data.data.data.map((product) => (
                  <div className='col-span-1' key={product.id}>
                    <Product product={product} />
                  </div>
                ))}
              </div>
              <Pagination
                queryConfig={queryConfig}
                pageSize={Math.ceil(data?.data.data.count / data.data.data.pageSize)}
              />
            </div>
          )}
        </div>
      </div>
      <NavBottom />
    </div>
  )


}
