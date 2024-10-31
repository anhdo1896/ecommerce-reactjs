import { Controller, useFormContext } from 'react-hook-form'
import { Fragment } from 'react/jsx-runtime'
import Input from '../Input'
import InputNumber from '../InputNumber'
import { UserSchema } from 'src/utils/rules'
type FormData = Pick<UserSchema, 'name' | 'address' | 'phoneNumber' | 'dateOfBirth' | 'avatar'>

export default function InputProfile() {
  const methods = useFormContext<FormData>()

  const {
    register,
    control,
    formState: { errors }  } = methods

  return (
    <Fragment>
      <div className='mt-8 flex flex-wrap flex-col sm:flex-row'>
        <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Name</div>
        <div className='sm:w-[80%] sm:pl-5'>
          <Input
            name='name'
            classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
            placeholder='Name'
            register={register}
            errorMessage={errors.name?.message}
          />
        </div>
      </div>
      <div className='flex flex-wrap flex-col sm:flex-row'>
        <div className='sm:w-[20%] truncate pt-3 sm:text-right capitalize'>Phone</div>
        <div className='sm:w-[80%] sm:pl-5'>
          <Controller
            control={control}
            name='phoneNumber'
            render={({ field }) => (
              <InputNumber
                classNameInput='w-full rounded-sm border border-gray-300 px-3 py-2 outline-none focus:border-gray-500 focus:shadow-sm'
                errorMessage={errors.phoneNumber?.message}
                {...field}
                onChange={field.onChange}
              />
            )}
          />
        </div>
      </div>
    </Fragment>
  )
}
