import { AuthResponse } from 'src/types/auth.type'
import { ChangePassword, User, UserDetail } from 'src/types/user.type'
import { SuccessResponseApi } from 'src/types/utils.type'
import { httpAuth } from 'src/utils/http'

export const URL_LOGIN = 'login'
export const URL_REGISTER = 'register'
export const URL_LOGOUT = 'logout'
export const URL_REFRESH_TOKEN = 'refresh'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return httpAuth.post<AuthResponse>(URL_REGISTER, body)
  },
  loginAccount(body: { email: string; password: string }) {
    return httpAuth.post<AuthResponse>(URL_LOGIN, body)
  },
  logoutAccount() {
    return httpAuth.post<AuthResponse>(URL_LOGOUT)
  },
  editUser(newUser: UserDetail) {
    return httpAuth.post<SuccessResponseApi<User>>('edituser', newUser, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  getUser(id: string) {
    return httpAuth.get<SuccessResponseApi<UserDetail>>('getuser/' + id)
  },
  changPassword(changePassword: ChangePassword) {
    return httpAuth.post<SuccessResponseApi<string>>('changepassword', changePassword)
  }
}

export default authApi
