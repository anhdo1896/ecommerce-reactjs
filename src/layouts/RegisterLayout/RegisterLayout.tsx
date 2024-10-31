interface Props {
  children: React.ReactNode
}
export default function RegisterLayout({ children }: Props) {
  return (
    <div className='h-svh flex justify-center items-center text-[#5c5c5c]  bg-gray-100 p-2 lg:p-20'>{children}</div>
  )
}
