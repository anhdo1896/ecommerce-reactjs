import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import authApi from 'src/apis/auth.api'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import RegisterHeader from 'src/components/RegisterHeader'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import { ErrorResponseApi } from 'src/types/utils.type'
import { schema, Schema } from 'src/utils/rules'
import { isAxiosBadRequest } from 'src/utils/utils'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['password', 'email'])

export default function Login() {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  // const rules = getRules(getValues)
  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => authApi.loginAccount(body)
  })

  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosBadRequest<ErrorResponseApi<FormData>>(error)) {
          const formError = error.response?.data
          if (formError) {
            console.log(formError)
            setError(formError.type as keyof Omit<FormData, 'confirm_password'>, {
              message: formError.message
            })
          }
        }
      }
    })
  })
  return (
    <div className='w-full max-h-[900px] max-w-[400px] rounded-lg border border-gray-200 bg-white shadow-md p-10'>
      <RegisterHeader />
      <h1 className='text-xl font-bold text-black mt-5'>Login</h1>
      <div className='social-media grid grid-cols-2 gap-4 mt-3 text-[9px]'>
        <button className='p-1 border border-gray-400 rounded-md flex justify-center items-center'>
          <svg className='w-[20px] h-[20px] mr-2' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'>
            <path
              fill='#FFC107'
              d='M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z'
            />
            <path
              fill='#FF3D00'
              d='M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z'
            />
            <path
              fill='#4CAF50'
              d='M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z'
            />
            <path
              fill='#1976D2'
              d='M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z'
            />
          </svg>
          Sign in with Google
        </button>
        <button className='p-1 border border-gray-400 rounded-md flex justify-center items-center'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48' className='w-[20px] h-[20px] mr-2'>
            <linearGradient
              id='awSgIinfw5_FS5MLHI~A9a'
              x1='6.228'
              x2='42.077'
              y1='4.896'
              y2='43.432'
              gradientUnits='userSpaceOnUse'
            >
              <stop offset='0' stopColor='#0d61a9' />
              <stop offset='1' stopColor='#16528c' />
            </linearGradient>
            <path
              fill='url(#awSgIinfw5_FS5MLHI~A9a)'
              d='M42,40c0,1.105-0.895,2-2,2H8c-1.105,0-2-0.895-2-2V8c0-1.105,0.895-2,2-2h32	c1.105,0,2,0.895,2,2V40z'
            />
            <path
              d='M25,38V27h-4v-6h4v-2.138c0-5.042,2.666-7.818,7.505-7.818c1.995,0,3.077,0.14,3.598,0.208	l0.858,0.111L37,12.224L37,17h-3.635C32.237,17,32,18.378,32,19.535V21h4.723l-0.928,6H32v11H25z'
              opacity='.05'
            />
            <path
              d='M25.5,37.5v-11h-4v-5h4v-2.638c0-4.788,2.422-7.318,7.005-7.318c1.971,0,3.03,0.138,3.54,0.204	l0.436,0.057l0.02,0.442V16.5h-3.135c-1.623,0-1.865,1.901-1.865,3.035V21.5h4.64l-0.773,5H31.5v11H25.5z'
              opacity='.07'
            />
            <path
              fill='#fff'
              d='M33.365,16H36v-3.754c-0.492-0.064-1.531-0.203-3.495-0.203c-4.101,0-6.505,2.08-6.505,6.819V22h-4v4	h4v11h5V26h3.938l0.618-4H31v-2.465C31,17.661,31.612,16,33.365,16z'
            />
          </svg>
          Sign in with Facebook
        </button>
      </div>
      <div className='text-center m-5'>- OR - </div>
      <form className='text-[13px]' onSubmit={onSubmit} noValidate>
        <Input type='email' name='email' placeholder='Email' register={register} errorMessage={errors.email?.message} />
        <Input
          name='password'
          type='password'
          placeholder='Password'
          register={register}
          errorMessage={errors.password?.message}
          className='relative'
        />
        <Button
          type='submit'
          className='w-full bg-primary py-2 text-sm text-white font-bold rounded-md hover:opacity-[0.6] flex items-center justify-center'
          isLoading={loginAccountMutation.isPending}
          disabled={loginAccountMutation.isPending}
        >
          Login
        </Button>
      </form>
      <div className='font-semibold text-sm mt-5'>
        Don't have an account yet? &nbsp;
        <Link className='text-sm text-primary hover:opacity-[0.6]' to={path.register}>
          Register here
        </Link>
      </div>
    </div>
  )
}
