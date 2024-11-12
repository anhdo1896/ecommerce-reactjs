import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { AuthResponse, RefreshTokenResponse } from 'src/types/auth.type'
import { clearLS, getAccessTokenFromLS, saveAccessTokenFromLS } from './auth'
import localStorageConstants from 'src/constants/localStorage'
import config from 'src/constants/config'
import { URL_LOGIN, URL_LOGOUT, URL_REFRESH_TOKEN } from 'src/apis/auth.api'
import { isAxiosUnauthorized } from './utils'
import { ErrorResponse } from 'react-router-dom'

export class Http {
  instance: AxiosInstance
  private accessToken: string
  private refreshToken: string
  private refreshTokenRequest: Promise<void> | null

  constructor(url: string) {
    this.accessToken = getAccessTokenFromLS(localStorageConstants.accessToken)
    this.refreshToken = getAccessTokenFromLS(localStorageConstants.refreshToken)
    this.refreshTokenRequest = null
    this.instance = axios.create({
      baseURL: url,
      timeout: 50000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = `Bearer ${this.accessToken}`
          return config
        }
        return config
      },
      function (error) {
        return Promise.reject(error)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        const { url } = response.config
        if (url === URL_LOGIN) {
          this.accessToken = (response.data as AuthResponse).data.token
          this.refreshToken = (response.data as AuthResponse).data.refreshToken
          saveAccessTokenFromLS(localStorageConstants.accessToken, this.accessToken)
          saveAccessTokenFromLS(localStorageConstants.refreshToken, this.refreshToken)
          saveAccessTokenFromLS(
            localStorageConstants.profile,
            JSON.stringify((response.data as AuthResponse).data.user)
          )
          httpGateway = new Http(config.baseUrlGateway).instance
        } else if (url === URL_LOGOUT) {
          this.accessToken = ''
          this.refreshToken = ''
          clearLS()
        }
        return response
      },
      (error: AxiosError) => {
        if (![HttpStatusCode.Unauthorized, HttpStatusCode.UnprocessableEntity].includes(error.response?.status as number)) {
          const configError = error.response?.config
          const url = configError?.url as string
          if (url === URL_REFRESH_TOKEN) {
            this.accessToken = ''
            this.refreshToken = ''
            clearLS()
          }
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          toast.error(message)
        }
        if (isAxiosUnauthorized<ErrorResponse>(error)) {
          const configError = error.response?.config
          const url = configError?.url as string
          if (url !== URL_REFRESH_TOKEN) {
            this.refreshTokenRequest = this.refreshTokenRequest ? this.refreshTokenRequest : this.handleRefreshToken().finally(() => {
              setTimeout(() => {
                this.refreshTokenRequest = null
              }, 10000);
            })
            return this.refreshTokenRequest.then(() => {
              if (configError?.headers) {
                httpGateway = new Http(config.baseUrlGateway).instance
                httpAuth = new Http(config.baseUrlAuth).instance
                return
              }
            })
          }


          clearLS()
          this.accessToken = ""
          this.refreshToken = ""
          toast.error(error.message)
        }
        return Promise.reject(error)
      }
    )
  }
  private handleRefreshToken() {
    this.instance = new Http(config.baseUrlAuth).instance
    return this.instance.post<RefreshTokenResponse>(URL_REFRESH_TOKEN, {
      accessToken: this.accessToken,
      refreshToken: this.refreshToken
    }).then((res) => {
      const { token } = res.data.data
      saveAccessTokenFromLS(localStorageConstants.accessToken, token)
    }).catch(error => {
      clearLS()
      throw error
    })
  }
}

let httpAuth = new Http(config.baseUrlAuth).instance
let httpGateway = new Http(config.baseUrlGateway).instance

export { httpAuth, httpGateway }
