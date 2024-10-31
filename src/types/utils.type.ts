export interface ErrorResponseApi<Data> {
  data?: Data
  message: string
  isSuccess: boolean
  type: string
}

export interface SuccessResponseApi<Data> {
  data: Data
  message: string
  isSuccess: boolean
  type: string
}

export type NonUndefinedField<T> = {
  [P in keyof T]-?: NonUndefinedField<NonNullable<T[P]>>
}