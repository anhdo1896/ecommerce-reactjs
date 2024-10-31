import { ProductListConfig } from "src/types/product.type"
import useQueryParams from "./useQueryParams"
import isUndefined  from "lodash/isUndefined"
import omitBy  from "lodash/omitBy"

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}
export default function useQueryConfig() {
  const queryParams = useQueryParams()
  const queryConfig: QueryConfig = omitBy(
    {
      pageIndex: queryParams.pageIndex || '1',
      pageSize: queryParams.pageSize,
      sort: queryParams.sort,
      categoryId: queryParams.categoryId,
      brandId: queryParams.brandId,
      search: queryParams.search,
      priceMin: queryParams.priceMin,
      priceMax: queryParams.priceMax,
      ratingNumber: queryParams.ratingNumber
    },
    isUndefined
  )
  return queryConfig
}
