import { useRef } from 'react'
import { toast } from 'react-toastify'
import config from 'src/constants/config'

interface Props {
  onChange?: (file?: File) => void
}

export default function InputFile({ onChange }: Props) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileFromLocal = event.target.files?.[0]

    if ((fileFromLocal && fileFromLocal.size >= config.maxSizeUploadAvatar) || !fileFromLocal?.type.includes('image')) {
      toast.error('File is invalid')
    } else {
      onChange && onChange(fileFromLocal)
    }
  }

  const handleuUploadImage = () => {
    fileInputRef.current?.click()
  }
  return (
    <>
      <input
        type='file'
        className='hidden'
        accept='.jpg,.jpeg,.png'
        ref={fileInputRef}
        onChange={onFileChange}
        onClick={(event) => {
          ;(event.target as any).value = null
        }}
      />
      <button
        type='button'
        className='flex h-10 items-center justify-end rounded-sm border border-sm bg-white px-6 text-sm text-gray-600 shadow-sm'
        onClick={handleuUploadImage}
      >
        Choose image
      </button>
      <div className='mt-3 text-gray-400'>Maximum size of image 1MB</div>
      <div className='mt-3 text-gray-400'>Type of images: JPEG, PNG</div>
    </>
  )
}
