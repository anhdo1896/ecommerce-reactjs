import path from 'src/constants/path'
import { AuthResponse } from 'src/types/auth.type'
import { ChangePassword, User, UserDetail } from 'src/types/user.type'
import { SuccessResponseApi } from 'src/types/utils.type'
import { httpAuth } from 'src/utils/http'

const authApi = {
  registerAccount(body: { email: string; password: string }) {
    return httpAuth.post<AuthResponse>(path.register, body)
  },
  loginAccount(body: { email: string; password: string }) {
    return httpAuth.post<AuthResponse>(path.login, body)
  },
  logoutAccount() {
    return httpAuth.post<AuthResponse>(path.logout)
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
