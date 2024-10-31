import { useMutation, useQuery } from '@tanstack/react-query'
import { useContext, useEffect, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import cartApi from 'src/apis/cart.api'
import InputNumber from 'src/components/InputNumber'
import QuantityController from 'src/components/QuantityController'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import type { Cart, CartDetail, CartHeader } from 'src/types/cart.type'
import { formatCurrency, generateNameId } from 'src/utils/utils'
import { produce } from 'immer'
import { Product } from 'src/types/product.type'
import keyBy from 'lodash/keyBy'
import orderApi from 'src/apis/order.api'
import noproduct from 'src/assets/images/NO-PRODUCT.png'
import { Stripe } from 'src/types/order.type'
import OrderStatusCode from 'src/constants/orderStatus.enum'

export default function Cart() {
  const { isAuthenticated, profile, extendedPurchases, setExtendedPurchases } = useContext(AppContext)
  const location = useLocation()
  const chosenPurchaseFromLocation = (location.state as { purchaseId: string } | null)?.purchaseId

  const { data: purchasesInCartData, refetch } = useQuery({
    queryKey: ['purchase'],
    queryFn: () => cartApi.getCart(profile?.id as string),
    enabled: isAuthenticated
  })

  const addToCartMutation = useMutation({
    mutationFn: (body: Cart) => cartApi.addToCart(body)
  })

  const removeCartMutation = useMutation({
    mutationFn: (body: Number[]) => cartApi.removeCart(body),
    onSuccess: () => {
      refetch()
    }
  })

  const createOrderMutation = useMutation({
    mutationFn: (body: Cart) => orderApi.createOrder(body)
  })

  const createStripeOrderMutation = useMutation({
    mutationFn: (body: Stripe) => orderApi.createStripeSession(body)
  })

  const purchasesInCart = purchasesInCartData?.data.data
  const isAllChecked = useMemo(() => extendedPurchases?.every((purchase) => purchase.checked), [extendedPurchases])
  const checkedPurchases = useMemo(() => extendedPurchases?.filter((purchase) => purchase.checked), [extendedPurchases])
  const checkedPurchasesLength = checkedPurchases?.length
  const totalCheckedPurchasesPrice = useMemo(
    () =>
      checkedPurchases?.reduce((result, current) => {
        return result + current.product.price * current.count
      }, 0),
    [checkedPurchases]
  )

  useEffect(() => {
    setExtendedPurchases((prev) => {
      const extendedPurchasesObject = keyBy(prev, 'productId')
      return (
        purchasesInCart?.cartDetails.map((purchase) => {
          const isPurchased = chosenPurchaseFromLocation === purchase.productId

          return {
            ...purchase,
            disabled: false,
            checked: isPurchased || Boolean(extendedPurchasesObject[purchase.productId]?.checked)
          }
        }) || []
      )
    })
  }, [purchasesInCart, chosenPurchaseFromLocation])

  useEffect(() => {
    return () => {
      history.replaceState(null, '')
    }
  }, [])

  const handleChecked = (productIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setExtendedPurchases(
      produce((draft) => {
        if (draft) {
          draft[productIndex].checked = event.target.checked
        }
      })
    )
  }

  const handleSelectAll = () => {
    setExtendedPurchases((prev) =>
      prev?.map((purchase) => ({
        ...purchase,
        checked: !isAllChecked
      }))
    )
  }

  const handleQuantity = (purchaseIndex: number, value: number, condition: boolean) => {
    if (profile && condition) {
      const purchase = extendedPurchases?.[purchaseIndex]

      setExtendedPurchases(
        produce((draft) => {
          if (draft) {
            draft[purchaseIndex].disabled = true
          }
        })
      )

      if (condition) {
        const cartHeader: CartHeader = {
          userId: profile.id,
          cartHeaderId: purchase?.cartHeaderId
        }
        const carDetails: CartDetail[] = [
          {
            product: purchase?.product as Product,
            count: value,
            productId: purchase?.product?.id as string,
            cartHeader: cartHeader
          }
        ]
        addToCartMutation.mutate(
          { cartHeader: cartHeader, cartDetails: carDetails },
          {
            onSuccess: () => {
              refetch()
            }
          }
        )
      }
    }
  }

  const handleTypeQuantity = (purchaseIndex: number) => (value: number) => {
    setExtendedPurchases(
      produce((draft) => {
        if (draft) {
          draft[purchaseIndex].count = value
        }
      })
    )
  }

  const handleDelete = (purchaseIndex: number) => () => {
    const purchaseId = extendedPurchases?.[purchaseIndex].cartDetailsId
    removeCartMutation.mutate([purchaseId] as Number[])
  }

  const handleManyDelete = () => {
    removeCartMutation.mutate(checkedPurchases?.map((purchase) => purchase.cartDetailsId) as Number[])
  }

  const handlePayment = () => {
    if (checkedPurchases && checkedPurchases?.length > 0 && profile) {
      const cartHeader: CartHeader = {
        userId: profile.id,
        cartHeaderId: checkedPurchases[0]?.cartHeaderId,
        cartTotal: totalCheckedPurchasesPrice
      }
      const carDetails: CartDetail[] = []
      checkedPurchases.map((purchase) => {
        const purchaseId = purchase.cartDetailsId
        removeCartMutation.mutate([purchaseId] as Number[])

        carDetails.push({
          product: purchase?.product as Product,
          count: purchase.count,
          productId: purchase?.product?.id as string,
          cartHeader: cartHeader
        })
      })

      createOrderMutation.mutate(
        { cartHeader: cartHeader, cartDetails: carDetails },
        {
          onSuccess: (data) => {
            const stripe: Stripe = {
              cancelUrl: `${window.location.protocol}//${window.location.host}${path.historyPurchase}?status=${OrderStatusCode.Status_Cancelled}&canceled=true&orderId=${data.data.data.orderHeaderId}`,
              approvedUrl: `${window.location.protocol}//${window.location.host}${path.historyPurchase}?status=${OrderStatusCode.Status_Approved}&success=true&orderId=${data.data.data.orderHeaderId}`,
              orderHeader: data.data.data
            }

            createStripeOrderMutation.mutate(stripe, {
              onSuccess: (data) => {
                const url = data.data.data.stripeSessionUrl
                window.location.href = url as string
              }
            })
          }
        }
      )
    }
  }

  return (
    <div className='bg-neutral-100 py-16'>
      <div className='container'>
        {extendedPurchases.length > 0 ? (
          <>
            <div className='overflow-auto'>
              <div className='min-w-[1000px]'>
                <div className='grid grid-cols-12 rounded-sm bg-white py-5 px-9 font-bold'>
                  <div className='col-span-6'>
                    <div className='flex '>
                      <div className='flex-shrink-0 justify-center items-cente pr-3'>
                        <input
                          className='accent-pink-500  h-5 w-5 mr-2'
                          type='checkbox'
                          checked={isAllChecked}
                          onChange={handleSelectAll}
                        />
                      </div>
                      <span className='flex-grow text-black'>Products</span>
                    </div>
                  </div>
                  <div className='col-span-6'>
                    <div className='grid text-center grid-cols-5 '>
                      <div className='col-span-2'>Price</div>
                      <div className='col-span-1'>Quantity</div>
                      <div className='col-span-1'>Amount</div>
                      <div className='col-span-1'>Actions</div>
                    </div>
                  </div>
                </div>
                {extendedPurchases && extendedPurchases?.length > 0 && (
                  <div className='my-3 rounded-sm bg-white shadow p-1'>
                    {extendedPurchases?.map((purchase, index) => (
                      <div
                        key={purchase.productId}
                        className='first:mt-0 m-5 last:mb-0 grid grid-cols-12 rounded-sm bg-white py-5 px-3 border border-gray-200 items-center'
                      >
                        <div className='col-span-6'>
                          <div className='flex'>
                            <div className='flex flex-shrink-0 items-center justify-center pr-3'>
                              <input
                                type='checkbox'
                                className='h-5 w-5 accent-pink-500'
                                checked={purchase.checked}
                                onChange={handleChecked(index)}
                              />
                            </div>
                            <div className='flex-grow'>
                              <div className='flex items-center'>
                                <Link
                                  to={`${path.home}${generateNameId({ name: purchase.product.name, id: purchase.productId })}`}
                                  className='h-20 w-20 flex-shrink-0'
                                >
                                  <img
                                    alt={purchase.product.name}
                                    src={purchase.product.images[0].url}
                                    className='w-full h-full'
                                  />
                                </Link>
                                <span className='flex-grow px-2 pt-1 pb-2 '>
                                  <Link
                                    to={`${path.home}${generateNameId({ name: purchase.product.name, id: purchase.productId })}`}
                                    className='line-clamp-2'
                                  >
                                    {purchase.product.name}
                                  </Link>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-span-6'>
                          <div className='grid grid-cols-5 items-center'>
                            <div className='col-span-2'>
                              <div className='flex items-center justify-center'>
                                <span className=' text-gray-500 line-through text-center'>
                                  AUD{formatCurrency(purchase.product.priceBeforeDiscount)}
                                </span>
                                <span className=' text-gray-500 ml-3 text-center'>
                                  AUD{formatCurrency(purchase.product.price)}
                                </span>
                              </div>
                            </div>
                            <div className='col-span-1'>
                              <QuantityController
                                max={purchase.product.quantity}
                                value={purchase.count}
                                classNameWrapper='flex items-center'
                                onIncrease={(value) => handleQuantity(index, value, value <= purchase.product.quantity)}
                                onDecrease={(value) => handleQuantity(index, value, value >= 1)}
                                onType={handleTypeQuantity(index)}
                                onFocusOut={(value) =>
                                  handleQuantity(
                                    index,
                                    value,
                                    value <= purchase.product.quantity &&
                                      value >= 1 &&
                                      value !== (purchasesInCart as Cart).cartDetails[index].count
                                  )
                                }
                                disabled={purchase.disabled}
                              />
                            </div>
                            <div className='col-span-1 text-center ml-2'>
                              <span className='  text-pink-500'>
                                AUD
                                {formatCurrency(
                                  purchase.product.price * (purchasesInCart as Cart)?.cartDetails[index]?.count
                                )}
                              </span>
                            </div>
                            <div className='col-span-1 text-center ml-2'>
                              <button
                                className='bg-none text-black transition-colors hover:text-pink-500'
                                onClick={handleDelete(index)}
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className='sticky bottom-0 bg-white p-9 shadow-sm'>
              <div className='grid grid-cols-12'>
                <div className='sm:col-span-3 col-span-12'>
                  <div className='flex items-center'>
                    <input
                      type='checkbox'
                      className='accent-pink-500 w-5 h-5 mr-3'
                      checked={isAllChecked}
                      onChange={handleSelectAll}
                    />
                    <span>Select all ({extendedPurchases?.length} products)</span>
                    <button className='mx-3 hover:text-pink-500' onClick={handleManyDelete}>
                      Delete
                    </button>
                  </div>
                </div>
                <div className='sm:col-span-3 sm:mt-0 col-span-12 mt-4'>
                  <InputNumber
                    classNameInput='outline-none border border-gray-300 p-2 sm:w-auto w-full'
                    placeholder='Coupon'
                    classNameError='hidden'
                  />
                </div>
                <div className='sm:col-span-6 col-span-12 mt-4 sm:mt-0 '>
                  <div className='grid grid-cols-12'>
                    <div className='flex items-center sm:col-span-4  col-span-12'>
                      Total ({checkedPurchasesLength} products )
                    </div>
                    <div className=' sm:col-span-5 col-span-12 mt-4 sm:mt-0'>
                      <span className='text-2xl text-pink-500'>AUD{totalCheckedPurchasesPrice}</span>
                    </div>
                    <div className=' sm:col-span-3 col-span-12 sm:justify-self-end sm:mt-0 mt-4'>
                      <button
                        className='bg-pink-500 text-white  sm:w-32 w-full h-10 hover:bg-pink-500/80 '
                        onClick={handlePayment}
                        disabled={
                          createOrderMutation.isPending || extendedPurchases?.length === 0 || !extendedPurchases
                        }
                      >
                        Payment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='text-center'>
            <img className='m-auto' src={noproduct} />
            <div className='my-5'>
              <Link to={path.home} className='bg-pink-500 text-white px-10 py-5 rounded-md'>
                Buy now
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
