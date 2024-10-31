import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useMemo, useState } from 'react'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import authApi from 'src/apis/auth.api'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import { AppContext } from 'src/contexts/app.context'
import { userSchema, UserSchema } from 'src/utils/rules'
import DateSelect from '../../components/DateSelect'
import { UserDetail } from 'src/types/user.type'
import { toast } from 'react-toastify'
import { saveProfileToLS } from 'src/utils/auth'
import InputFile from 'src/components/InputFile'
import imageProfile from 'src/assets/images/avatar.svg'
import InputProfile from 'src/components/InputProfile'

type FormData = Pick<UserSchema, 'name' | 'address' | 'phoneNumber' | 'dateOfBirth' | 'avatar'>

const userSchemaPick = userSchema.pick(['name', 'address', 'phoneNumber', 'dateOfBirth', 'avatar'])

export default function Profile() {
  const { profile, setProfile } = useContext(AppContext)
  const [file, setFile] = useState<File>()
  const previewImage = useMemo(() => {
    return file ? URL.createObjectURL(file) : ''
  }, [file])

  const methods = useForm<FormData>({
    defaultValues: {
      name: '',
      address: '',
      phoneNumber: '',
      avatar: '',
      dateOfBirth: new Date(1990, 0, 1)
    },
    resolver: yupResolver(userSchemaPick)
  })

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    watch
  } = methods

  const avatar = watch('avatar')

  const { data: profileData, refetch } = useQuery({
    queryKey: ['profile', profile?.id],
    queryFn: () => authApi.getUser(profile?.id as string)
  })
  const profileDetail = profileData?.data.data

  useEffect(() => {
    setValue('name', profileDetail?.name)
    setValue('phoneNumber', profileDetail?.phoneNumber)
    setValue('address', profileDetail?.address)
    setValue('dateOfBirth', profileDetail?.dateOfBirth ? new Date(profileDetail.dateOfBirth) : new Date(1990, 0.1))
    setValue('avatar', profileDetail?.avatar)
  }, [profileDetail])

  const editUserMutation = useMutation({
    mutationFn: (body: UserDetail) => authApi.editUser(body)
  })

  const onSubmit = handleSubmit(async (data) => {
    try {
      const userDetail = new FormData()
      if (file) {
        userDetail.append('avatar', file)
      }
      userDetail.append('email', profile?.email as string)
      userDetail.append('name', data?.name as string)
      userDetail.append('phoneNumber', data?.phoneNumber as string)
      userDetail.append('dateOfBirth', data?.dateOfBirth?.toDateString() as string)
      userDetail.append('address', data?.address as string)
      userDetail.append('avatarUrl', profile?.avatar as string)

      const res = await editUserMutation.mutateAsync(userDetail as UserDetail)
      refetch()

      if (res.data.isSuccess) {
        toast.success('Update successed')
        setProfile(res.data.data)
        saveProfileToLS(res.data.data)
      } else {
        toast.error('There are errors')
      }
    } catch (error) {}
  })

  const handleChangeFile = (file?: File) => {
    setFile(file)
  }

  return (
    <div className='rounded-sm bg-white px-2 md:px-7 md:pb-20 pb-10 shadow'>
      <div className='border-b border-b-gray-200 py-6'>
        <h1 className='text-lg font-medium capitalize text-gray-900'>My Profile</h1>
        <div className='mt-1 text-sm text-gray-700'>Manage profile information to secure your account</div>
      </div>
      <FormProvider {...methods}>
        <form className='mt-8 flex flex-col-reverse md:flex-row md:items-start' noValidate onSubmit={onSubmit}>
          <div className='flex-grow md:pr-12'>
            <div className='flex flex-wrap flex-col sm:flex-row'>
              <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Email</div>
              <div className='sm:w-[80%] sm:pl-5'>
                <div className='pt-3 text-gray-700'>{profileDetail?.email}</div>
              </div>
            </div>
            <InputProfile  />
            <div className='flex flex-wrap  flex-col sm:flex-row'>
              <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Address</div>
              <div className='sm:w-[80%] sm:pl-5'>
                <Input
                  name='address'
                  placeholder='Address'
                  classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                  register={register}
                />
              </div>
            </div>
            <div className='flex flex-wrap  flex-col sm:flex-row'>
              <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Birthday</div>
              <div className='sm:w-[80%] sm:pl-5'>
                <Controller
                  control={control}
                  name='dateOfBirth'
                  render={({ field }) => (
                    <DateSelect
                      errorMessage={errors.dateOfBirth?.message}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  )}
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
          <div className='flex justify-center md:w-72 md:border-l md:border-l-gray-200'>
            <div className='flex flex-col items-center'>
              <div className='my-5 h-24 w-24'>
                <img
                  src={previewImage || avatar || imageProfile}
                  alt='avatar'
                  className='w-full h-full object-cover rounded-full'
                />
              </div>
              <InputFile onChange={handleChangeFile} />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}
