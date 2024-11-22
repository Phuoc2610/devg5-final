import React from 'react'
import { FaTrash, FaMinus, FaPlus, FaShoppingCart, FaCreditCard, FaCheckCircle } from "react-icons/fa";

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="flex items-center justify-between p-4 mb-4 bg-white dark:bg-gray-800 rounded-lg overflow-y-auto">
      <div className="flex items-center space-x-4">
        <img src={`https://${item.image}`} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{item.name}</h3>
          <p className="text-gray-600 dark:text-gray-400">${item.price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            disabled={item.quantity <= 1}
          >
            <FaMinus />
          </button>
          <span className="text-gray-800 dark:text-white">{item.quantity}</span>
          <button
            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
          >
            <FaPlus />
          </button>
        </div>
        <button
          onClick={() => onRemove(item.id)}
          className="p-2 text-red-500 hover:text-red-400"
        >
          <FaTrash />
        </button>
      </div>
    </div>
  )
}

export default CartItem;