import CartHeader from "src/components/CartHeader";

interface Props {
  children: React.ReactNode
}

export default function CartLayout({ children }: Props) {
  return (
    <>
      <CartHeader />
      {children}
    </>
  )
}
