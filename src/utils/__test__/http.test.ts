import { describe, expect, it } from 'vitest'
import { httpGateway } from '../http'
import HttpStatusCode from 'src/constants/httpStatusCode.enum'


describe('Test http request from axios', () => {
  // let http = new Http('https://localhost:7002/api/auth').instance

  // beforeEach(() => {
  //   localStorage.clear()
  //   http = new Http('https://localhost:7002/api/auth').instance
  // })

  it('call API', () => {
    httpGateway.get('product').then((data) => {
      expect(data.status).toBe(HttpStatusCode.Ok)
    })
  })


})
