import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import authApi from 'src/apis/auth.api'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import { AppContext } from 'src/contexts/app.context'
import { ChangePassword as ChangePasswordType } from 'src/types/user.type'
import { ErrorResponseApi } from 'src/types/utils.type'
import { userSchema, UserSchema } from 'src/utils/rules'
import { isAxiosBadRequest } from 'src/utils/utils'

type FormData = Pick<UserSchema, 'newPassword' | 'currentPassword' | 'confirmPassword'>

const userSchemaPick = userSchema.pick(['newPassword', 'currentPassword', 'confirmPassword'])

export default function ChangePassword() {
  const { profile } = useContext(AppContext)

  const methods = useForm<FormData>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: ''
    },
    resolver: yupResolver(userSchemaPick)
  })

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit
  } = methods

  const changePasswordMutation = useMutation({
    mutationFn: (body: ChangePasswordType) => authApi.changPassword(body)
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const changePassword: ChangePasswordType = {
        email: profile?.email as string,
        currentPassword: data.currentPassword as string,
        newPassword: data.newPassword as string
      }

      const res = await changePasswordMutation.mutateAsync(changePassword)

      if (res.data.isSuccess) {
        toast.success('Change password success')
      }
    } catch (error) {
      
        if (isAxiosBadRequest<ErrorResponseApi<FormData>>(error)) {
          const formError = error.response?.data
          if (formError) {
            setError('confirmPassword', {
              message: formError.message
            })
          }
        }
    }
  })

  return (
    <div className='rounded-sm bg-white px-2 md:px-7 md:pb-20 pb-10 shadow'>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>My Profile</h1>
        <div className='mt-1 text-sm text-gray-700'>Manage profile information to secure your account</div>
      </div>

      <form className='mt-8 mr-auto max-w-2xl' noValidate onSubmit={onSubmit}>
        <div className='flex-grow md:pr-12'>
          <div className='flex flex-wrap  flex-col sm:flex-row'>
            <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Current password</div>
            <div className='sm:w-[80%] sm:pl-5'>
              <Input
                type='password'
                name='currentPassword'
                placeholder='Current password'
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                register={register}
                errorMessage={errors.currentPassword?.message}
                className='relative'
              />
            </div>
          </div>
          <div className='flex flex-wrap  flex-col sm:flex-row'>
            <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>New password</div>
            <div className='sm:w-[80%] sm:pl-5'>
              <Input
                type='password'
                name='newPassword'
                placeholder='New password'
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                register={register}
                errorMessage={errors.newPassword?.message}
                className='relative'
              />
            </div>
          </div>
          <div className='flex flex-wrap  flex-col sm:flex-row'>
            <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Confirm password</div>
            <div className='sm:w-[80%] sm:pl-5'>
              <Input
                type='password'
                name='confirmPassword'
                placeholder='Confirm new password'
                classNameInput=' w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                register={register}
                errorMessage={errors.confirmPassword?.message}
                className='relative'
              />
            </div>
          </div>
          <div className='flex flex-wrap flex-col sm:flex-row'>
            <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'></div>
            <div className='sm:w-[80%] sm:pl-5'>
              <Button
                className='flex h-9 items-center bg-pink-500 px-5 text-center text-sm text-white hover:bg-pink-500/80'
                type='submit'
              >
                Save
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
