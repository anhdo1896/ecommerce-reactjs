import { User } from './user.type'
import { SuccessResponseApi } from './utils.type'

export type AuthResponse = SuccessResponseApi<{
  token: string
  refreshToken: string
  user: User
}>

export type RefreshTokenResponse = SuccessResponseApi<{
  token: string
  refreshToken: string
}>
