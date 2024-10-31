type Role = 'ADMIN' | 'USER'

export interface User {
  id: string
  email: string
  name: string
  phoneNumber?: string
  address?: string
  dateOfBirth?: string
  avatar?: string
  roles: Role[]
}

export interface UserDetail {
  email?: string
  name?: string
  phoneNumber?: string
  address?: string
  dateOfBirth?: string
  avatar?: string
  avatarUrl?: string
  roles?: Role[]
}

export interface ChangePassword {
  email: string
  currentPassword: string
  newPassword: string
}
