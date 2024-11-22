import React, { useState } from 'react';

const ListVoucher = ({ onApply }) => {
    const [code, setCode] = useState("");

    const handleApply = () => {
        onApply(code);
        setCode("");
    };

    return (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-4">Voucher Code</h2>
            <div className="flex space-x-2">
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    className="flex-1 px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter voucher code"
                />
                <button
                    onClick={handleApply}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Apply
                </button>
            </div>
        </div>
    );
};

export default ListVoucher;
