import { User } from './user.type'
import { SuccessResponseApi } from './utils.type'

export type AuthResponse = SuccessResponseApi<{
  token: string
  user: User
}>
