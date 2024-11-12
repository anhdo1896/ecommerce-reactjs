import { useQuery } from '@tanstack/react-query'
import classNames from 'classnames'
import { useContext } from 'react'
import { createSearchParams, Link } from 'react-router-dom'
import orderApi from 'src/apis/order.api'
import OrderStatusCode from 'src/constants/orderStatus.enum'
import path from 'src/constants/path'
import { AppContext } from 'src/contexts/app.context'
import useQueryParams from 'src/hooks/useQueryParams'
import { formatCurrency, generateNameId } from 'src/utils/utils'

const purchaseTabs = [
  { status: OrderStatusCode.Status_All, name: 'All' },
  { status: OrderStatusCode.Status_Pending, name: 'Pending' },
  { status: OrderStatusCode.Status_Approved, name: 'Approved' },
  { status: OrderStatusCode.Status_ReadyForPickup, name: 'Ready to pick up' },
  { status: OrderStatusCode.Status_Completed, name: 'Completed' },
  { status: OrderStatusCode.Status_Cancelled, name: 'Cancelled' },
  { status: OrderStatusCode.Status_Refunded, name: 'Refunded' }
]

export default function HistoryPurchase() {
  const { profile, isAuthenticated } = useContext(AppContext)
  const queryParams: { status?: string } = useQueryParams()
  const status = queryParams.status || OrderStatusCode.Status_All

  const { data: orderData } = useQuery({
    queryKey: ['order', { status }],
    queryFn: () => orderApi.getOrderStatus(profile?.id as string, status),
    enabled: isAuthenticated
  })

  const orderDataStatus = orderData?.data.data

  const purchaseTabsLink = purchaseTabs.map((tab) => (
    <Link
      key={tab.status}
      to={{
        pathname: path.historyPurchase,
        search: createSearchParams({
          status: tab.status
        }).toString()
      }}
      className={classNames('flex flex-1 items-center justify-center border-b border-b-2 bg-white p-4', {
        'border-b-pink-500 text-pink-500': status === tab.status,
        'border-b-black/10 text-gray-900': status !== tab.status
      })}
    >
      <div className='truncate'>{tab.name}</div>
    </Link>
  ))

  return (
    <>
      <div className='sticky top-0 flex rounded-t-sm shadow-sm capitalize overflow-auto  '>{purchaseTabsLink}</div>

      <div>
        {orderDataStatus &&
          orderDataStatus.map((order) => (
            <div
              className='mt-4 bg-white rounded-sm border-black/10 p-6 text-gray-800 shadow-sm'
              key={order.orderHeaderId}
            >
              <div className='font-semibold'>{`Order #${order.orderHeaderId} processed in ${new Date(order.orderTime).toLocaleDateString()}`}</div>
              {order.orderDetails.map((product) => (
                <Link
                  key={product.productId}
                  to={`${path.home}${generateNameId({ name: product.productName, id: product.productId })}`}
                  className='mt-3 grid grid-cols-12 cursor-pointer '
                >
                  <div className='md:col-span-1 col-span-3'>
                    <img src={product.productImage} alt={product.productName} className='h-20 w-20 object-cover' />
                  </div>
                  <div className='ml-3 md:col-span-10 col-span-7 overflow-hidden'>
                    <div className='truncate'>{product.productName}</div>
                    <div className='mt-3'>x{product.count}</div>
                  </div>
                  <div className='md:col-span-1 col-span-2'>
                    <div className='text-pink-500 text-right text-lg'>AUD{formatCurrency(product.price)}</div>
                  </div>
                </Link>
              ))}
              <div className='text-right text-pink-500 font-semibold text-2xl'>
                Total: AUD{formatCurrency(order.orderTotal)}
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
