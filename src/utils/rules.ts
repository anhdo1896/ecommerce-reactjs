/* eslint-disable @typescript-eslint/no-explicit-any */
import type { RegisterOptions, UseFormGetValues } from 'react-hook-form'
import * as yup from 'yup'

type FormData = {
  email: string
  password: string
  confirm_password: string
}

type Rules = { [key in 'email' | 'password' | 'confirm_password']?: RegisterOptions<FormData, key> }

export const getRules = (getValues?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'This field is required'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Invalid email address'
    },
    minLength: {
      value: 5,
      message: 'Email must be at least 5 characters'
    },
    maxLength: {
      value: 160,
      message: 'Email must not exceed 160 characters'
    }
  },
  password: {
    required: {
      value: true,
      message: 'This field is required'
    },
    minLength: {
      value: 5,
      message: 'Email must be at least 5 characters'
    },
    maxLength: {
      value: 160,
      message: 'Email must not exceed 160 characters'
    }
  },
  confirm_password: {
    required: {
      value: true,
      message: 'This field is required'
    },
    minLength: {
      value: 5,
      message: 'Email must be at least 5 characters'
    },
    maxLength: {
      value: 160,
      message: 'Email must not exceed 160 characters'
    },
    validate: getValues ? (value) => value === getValues?.('password') || 'Passwords do not match' : undefined
  }
})

const handleConfirmPasswordYup = (refString: string) => {
  return yup
    .string()
    .required('This field is required')
    .min(5, 'Email must be at least 5 characters')
    .max(160, 'Email must not exceed 160 characters')
    .oneOf([yup.ref(refString)], 'Passwords do not match')
}

export const schema = yup.object({
  email: yup
    .string()
    .required('This field is required')
    .email('Invalid email address')
    .min(5, 'Email must be at least 5 characters')
    .max(160, 'Email must not exceed 160 characters'),
  password: yup
    .string()
    .required('This field is required')
    .min(5, 'Email must be at least 5 characters')
    .max(160, 'Email must not exceed 160 characters'),
  confirm_password: handleConfirmPasswordYup('password'),
  price_min: yup
    .string()
    .default('')
    .test({
      name: 'price-not-allowed',
      message: 'Price is not allowed',
      test: function (value) {
        const price_min = value
        const { price_max } = this.parent as { price_max: string; price_min: string }
        if (price_max !== '' && price_min !== '') {
          return Number(price_min) <= Number(price_max)
        }
        return price_min !== '' || price_max !== ''
      }
    }),
  price_max: yup
    .string()
    .default('')
    .test({
      name: 'price-not-allowed',
      message: 'Price is not allowed',
      test: function (value) {
        const price_max = value
        const { price_min } = this.parent as { price_max: string; price_min: string }
        if (price_max !== '' && price_min !== '') {
          return Number(price_min) <= Number(price_max)
        }
        return price_min !== '' || price_max !== ''
      }
    }),
  search: yup.string().trim().required('This field is required')
})

export const userSchema = yup.object({
  name: yup.string().max(160, 'The maximum length is 160 characters'),
  phoneNumber: yup.string().max(20, 'The maximum length is 20 characters'),
  address: yup.string().max(160, 'The maximum length is 160 characters'),
  avatar: yup.string().max(10000, 'The maximum length is 1000 characters'),
  dateOfBirth: yup.date().max(new Date(), 'Please select valid date'),
  currentPassword: schema.fields['password'],
  newPassword: schema.fields['password'],
  confirmPassword: handleConfirmPasswordYup('newPassword')
})

export type UserSchema = yup.InferType<typeof userSchema>
export type Schema = yup.InferType<typeof schema>
