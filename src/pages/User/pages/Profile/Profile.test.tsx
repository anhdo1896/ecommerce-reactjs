import { waitFor } from '@testing-library/dom'
import localStorageConstants from 'src/constants/localStorage'
import path from 'src/constants/path'
import { access_token, profile } from 'src/msw/user.msw'
import { saveAccessTokenFromLS } from 'src/utils/auth'
import { renderWithRouter } from 'src/utils/testUtils'

describe('Profile', () => {
  it('Show profile page', async () => {
    saveAccessTokenFromLS(localStorageConstants.accessToken, access_token)
    saveAccessTokenFromLS(localStorageConstants.profile, profile)
    const { container } = renderWithRouter({ route: path.profile })
    await waitFor(() => {
      expect((container.querySelector('form input[placeholder="Name"]') as HTMLInputElement).value).toBe('NGOC ANH DO')
    })
  })
})
