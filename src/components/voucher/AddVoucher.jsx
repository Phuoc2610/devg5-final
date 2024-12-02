import React, { useState } from "react";

const AddVoucher = ({ onClose }) => {
  const [voucherName, setVoucherName] = useState("");

  return (
    <div className="fixed inset-0 z-20 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 rounded-lg shadow-md p-6 w-[400px]">
        <h2 className="text-xl font-bold mb-4 text-white">Add New Category</h2>
        {/* Name */}
        <div>
          <h3 className="text-lg font-medium py-2 text-white">Name Voucher:</h3>
          <input
            type="text"
            value={voucherName}
            onChange={(e) => setVoucherName(e.target.value)}
            placeholder="Enter category name"
            className="w-full border border-gray-600 bg-gray-700 text-white rounded p-2 mb-4"
          />
        </div>

        {/* Buttons */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded mr-2"
          >
            Cancel
          </button>
          <button
            onClick={handleAddVoucher}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default AddVoucher