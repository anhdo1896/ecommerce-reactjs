import axios, { AxiosError, type AxiosInstance } from 'axios'
import { toast } from 'react-toastify'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'
import { AuthResponse } from 'src/types/auth.type'
import { dispatchEventRemoveLS, getAccessTokenFromLS, removeAccessTokenFromLS, saveAccessTokenFromLS } from './auth'
import localStorageConstants from 'src/constants/localStorage'
import path from 'src/constants/path'

//

export class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor(url: string) {
    this.accessToken = getAccessTokenFromLS(localStorageConstants.accessToken)
    this.instance = axios.create({
      baseURL: url,
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken && config.headers) {
          config.headers.Authorization = `${this.accessToken}`
          console.log(this.accessToken);
          
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
        if (url === path.login) {
          this.accessToken = (response.data as AuthResponse).data.token
          saveAccessTokenFromLS(localStorageConstants.accessToken, this.accessToken)
          saveAccessTokenFromLS(
            localStorageConstants.profile,
            JSON.stringify((response.data as AuthResponse).data.user)
          )
        } else if (url === path.logout) {
          this.accessToken = ''
          removeAccessTokenFromLS(localStorageConstants.accessToken)
          removeAccessTokenFromLS(localStorageConstants.profile)
        }
        return response
      },
      function (error: AxiosError) {
        if (error.response?.status !== HttpStatusCode.BadRequest) {
          const data: any | undefined = error.response?.data
          const message = data?.message || error.message
          console.log('error', message)
          toast.error(message)
        }
        if (error.response?.status === HttpStatusCode.Unauthorized) {
          removeAccessTokenFromLS(localStorageConstants.accessToken)
          removeAccessTokenFromLS(localStorageConstants.profile)
          dispatchEventRemoveLS()
        }
        return Promise.reject(error)
      }
    )
  }
}

const httpAuth = new Http('https://localhost:7002/api/auth').instance
const httpGateway = new Http('https://localhost:7777/api').instance

export { httpAuth, httpGateway }
