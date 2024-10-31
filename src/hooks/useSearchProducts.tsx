import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { sortBy } from 'src/constants/products'
import { schema, Schema } from 'src/utils/rules'
import useQueryConfig from './useQueryConfig'
import { createSearchParams, useNavigate } from 'react-router-dom'
import omit from 'lodash/omit'
import path from 'src/constants/path'

type FormData = Pick<Schema, 'search'>
const searchSchema = schema.pick(['search'])

export default function useSearchProducts() {
  const queryConfig = useQueryConfig()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    defaultValues: {
      search: ''
    },
    resolver: yupResolver(searchSchema)
  })

  const onSubmit = handleSubmit(
    (data) => {
      const config =
        queryConfig.sort === sortBy.priceAsc || queryConfig.sort === sortBy.priceDesc
          ? omit(
              {
                ...queryConfig,
                search: data.search
              },
              ['sort']
            )
          : {
              ...queryConfig,
              search: data.search
            }

      navigate({
        pathname: path.home,
        search: createSearchParams(errors.search ? omit({ ...config }, ['search']) : config).toString()
      })
    },
    (errors) => {
      const config =
        queryConfig.sort === sortBy.priceAsc || queryConfig.sort === sortBy.priceDesc
          ? omit(
              {
                ...queryConfig
              },
              ['sort']
            )
          : {
              ...queryConfig
            }
      navigate({
        pathname: path.home,
        search: createSearchParams(errors.search ? omit({ ...config }, ['search']) : queryConfig).toString()
      })
    }
  )

  return { register, onSubmit }
}
