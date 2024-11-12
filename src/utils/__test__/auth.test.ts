import { beforeEach, describe, expect, it } from 'vitest'
import { dispatchEventRemoveLS, getAccessTokenFromLS, removeAccessTokenFromLS, saveAccessTokenFromLS } from '../auth'

beforeEach(() => {
  localStorage.clear()
})

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaGRvQGdtYWlsLmNvbSIsInN1YiI6IjE4OWJmZjk4LTljZGUtNDRjYy1hMTBjLWQyZmFhYzVmZTNmMiIsIm5hbWUiOiJhbmhkb0BnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE3MzAzMzY0MDQsImV4cCI6MTczMDk0MTIwNCwiaWF0IjoxNzMwMzM2NDA0LCJpc3MiOiJlY29tbWVyY2UtYXV0aC1hcGkiLCJhdWQiOiJlY29tbWVyY2UtY2xpZW50In0.BjUj3Xzidbxm2DA1kqa3RrN0fevu9ddU5_jYAMl0om8'
// const profile =
//   '{"id":"189bff98-9cde-44cc-a10c-d2faac5fe3f2","email":"anhdo@gmail.com","name":"NGOC ANH DO","phoneNumber":"0451961806","address":"210 GROTE STREET","avatar":"https://localhost:7002/Avatar/anhdo@gmail.com/hero3.jpg.jpg","dateOfBirth":"1996-06-18T00:00:00","roles":["ADMIN"]}'

describe('set and get access_token FromLS', () => {
  it('get access token to local storage', () => {
    saveAccessTokenFromLS('access_token', access_token)
    expect(getAccessTokenFromLS('access_token')).toBe(access_token)
  })
})

describe('remove accessToken From LS', () => {
  it('get access token to local storage', () => {
    saveAccessTokenFromLS('access_token', access_token)
    dispatchEventRemoveLS()
    removeAccessTokenFromLS('access_token')
    expect(getAccessTokenFromLS('access_token')).toBe('')
  })
})
