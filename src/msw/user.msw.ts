import { http, HttpResponse } from 'msw'
import config from '../constants/config'

export const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaGRvQGdtYWlsLmNvbSIsInN1YiI6IjE4OWJmZjk4LTljZGUtNDRjYy1hMTBjLWQyZmFhYzVmZTNmMiIsIm5hbWUiOiJhbmhkb0BnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE3MzA2MDUwMzcsImV4cCI6MTczMTIwOTgzNywiaWF0IjoxNzMwNjA1MDM3LCJpc3MiOiJlY29tbWVyY2UtYXV0aC1hcGkiLCJhdWQiOiJlY29tbWVyY2UtY2xpZW50In0.XBy_a42aEiznf-suNdDZtDvuWbrYwEBxQZmT9lPyrlI'
export const profile =
  '{"id":"189bff98-9cde-44cc-a10c-d2faac5fe3f2","email":"anhdo@gmail.com","name":"NGOC ANH DO","phoneNumber":"0451961806","address":"210 GROTE STREET","avatar":"https://localhost:7002/Avatar/anhdo@gmail.com/hero3.jpg.jpg","dateOfBirth":"1996-06-18T00:00:00","roles":["ADMIN"]}'
const loginResponse = {
  user: {
    id: '189bff98-9cde-44cc-a10c-d2faac5fe3f2',
    email: 'anhdo@gmail.com',
    name: 'NGOC ANH DO',
    phoneNumber: '0451961806',
    address: '210 GROTE STREET',
    avatar: 'https://localhost:7002/Avatar/anhdo@gmail.com/hero3.jpg.jpg',
    dateOfBirth: '1996-06-18T00:00:00',
    roles: ['ADMIN']
  },
  token:
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFuaGRvQGdtYWlsLmNvbSIsInN1YiI6IjE4OWJmZjk4LTljZGUtNDRjYy1hMTBjLWQyZmFhYzVmZTNmMiIsIm5hbWUiOiJhbmhkb0BnbWFpbC5jb20iLCJyb2xlIjoiQURNSU4iLCJuYmYiOjE3MzA2MDIwODIsImV4cCI6MTczMTIwNjg4MiwiaWF0IjoxNzMwNjAyMDgyLCJpc3MiOiJlY29tbWVyY2UtYXV0aC1hcGkiLCJhdWQiOiJlY29tbWVyY2UtY2xpZW50In0.JOJxkQSCrdWXy7SPFwiWM2LPocr0NDeJ69yf1MbwuYM'
}

const profileRespone = {
  id: '189bff98-9cde-44cc-a10c-d2faac5fe3f2',
  email: 'anhdo@gmail.com',
  name: 'NGOC ANH DO',
  phoneNumber: '0451961806',
  address: '210 GROTE STREET',
  avatar: 'https://localhost:7002/Avatar/anhdo@gmail.com/hero2.jpg.jpg',
  dateOfBirth: '1996-06-18T00:00:00',
  roles: ['ADMIN']
}

export const userMock = [
  http.post(`${config.baseUrlAuth}/login`, () => {
    return HttpResponse.json({ data: loginResponse })
  }),
  http.get(`${config.baseUrlAuth}/getuser/${loginResponse.user.id}`, () => {
    return HttpResponse.json({ data: profileRespone })
  })
]
