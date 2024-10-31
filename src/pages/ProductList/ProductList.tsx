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

export default function ProductList() {
  const queryConfig = useQueryConfig()

  const { data } = useQuery({
    queryKey: ['product', queryConfig],
    queryFn: () => {
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
          <div className='col-span-3'>
            <AsideFilter
              queryConfig={queryConfig}
              categories={categoriesData?.data.data ? categoriesData?.data.data : []}
              brands={brandsData?.data.data ? brandsData?.data.data : []}
            />
          </div>
          {data && (
            <div className='col-span-9'>
              <SortProductList
                queryConfig={queryConfig}
                pageSize={Math.ceil(data?.data.data.count / data.data.data.pageSize)}
              />
              <div className='mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
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
    </div>
  )
}
