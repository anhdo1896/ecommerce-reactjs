import { User } from 'src/types/user.type'

export const LocalStorageEventTarget = new EventTarget()

export const saveAccessTokenFromLS = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getAccessTokenFromLS = (key: string) => {
  return localStorage.getItem(key) || ''
}

export const removeAccessTokenFromLS = (key: string) => {
  localStorage.removeItem(key)
}

export const clearLS = () => {
  localStorage.clear()
  dispatchEventRemoveLS()
}


export const dispatchEventRemoveLS = () => {
    const clearLSEvent = new Event('clearLS')
    LocalStorageEventTarget.dispatchEvent(clearLSEvent)
}

export const getProfileFromLS = () => {
  const result = getAccessTokenFromLS('profile')
  return result ? JSON.parse(result) : null
}

export const saveProfileToLS = (profile: User) => {
  saveAccessTokenFromLS('profile', JSON.stringify(profile))
}
