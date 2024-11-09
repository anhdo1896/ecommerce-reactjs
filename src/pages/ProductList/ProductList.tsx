import AsideFilter from './AsideFilter/AsideFilter'
import Product from './Product'
import { useQuery } from '@tanstack/react-query'
import productApi from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import { ProductListConfig } from 'src/types/product.type'
import SortProductList from './SortProductList'
import categoryApi from 'src/apis/category.api'
import brandsApi from 'src/apis/brand.api'
import useQueryConfig from 'src/hooks/useQueryConfig'
import NavBottom from 'src/components/NavBottom'
import { useContext } from 'react'
import { MobileContext } from 'src/contexts/mobile.context'
import noproduct from 'src/assets/images/NO-PRODUCT.png'

export default function ProductList() {
  const queryConfig = useQueryConfig()
  const { setIsSort, setIsFilter, setIsSearch } = useContext(MobileContext)

  const { data, isPending } = useQuery({
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

  return (

    <div className='bg-gray-200 py-6'>
      <div className='container'>
        <div className='grid grid-cols-12 gap-4'>
          <div className='lg:col-span-3'>
            <AsideFilter
              queryConfig={queryConfig}
              categories={categoriesData?.data.data ? categoriesData?.data.data : []}
              brands={brandsData?.data.data ? brandsData?.data.data : []}
            />
          </div>
          {data && (
            <div className='col-span-12 lg:col-span-9'>
              <SortProductList
                queryConfig={queryConfig}
                pageSize={Math.ceil(data?.data.data.count / data.data.data.pageSize)}
              />
              {
                isPending && (
                  <div role="status" className="space-y-2.5 animate-pulse max-w-lg">
                    <div className="flex items-center w-full">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32" />
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                    </div>
                    <div className="flex items-center w-full max-w-[480px]">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
                    </div>
                    <div className="flex items-center w-full max-w-[400px]">
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                      <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                    </div>
                    <div className="flex items-center w-full max-w-[480px]">
                      <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
                    </div>
                    <div className="flex items-center w-full max-w-[440px]">
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-32" />
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-24" />
                      <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full" />
                    </div>
                    <div className="flex items-center w-full max-w-[360px]">
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                      <div className="h-2.5 ms-2 bg-gray-200 rounded-full dark:bg-gray-700 w-80" />
                      <div className="h-2.5 ms-2 bg-gray-300 rounded-full dark:bg-gray-600 w-full" />
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>


                )

              }
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
