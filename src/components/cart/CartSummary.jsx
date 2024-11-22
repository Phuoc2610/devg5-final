import React from 'react'

const CartSummary = ({ subtotal, tax, shipping, total, discount }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
      <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Order Summary</h2>
      <div className="space-y-2">
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Tax</span>
          <span>${tax}</span>
        </div>
        <div className="flex justify-between text-gray-600 dark:text-gray-400">
          <span>Shipping</span>
          <span>${shipping}</span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-green-600 dark:text-green-500">
            <span>Discount</span>
            <span>-${discount}</span>
          </div>
        )}
        <div className="flex justify-between text-gray-800 dark:text-white font-bold pt-4 border-t border-gray-200 dark:border-gray-700">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>
    </div>
  )
}

export default CartSummary;