import React, { useState } from "react";
import { FaShoppingCart, FaTruck, FaSpinner, FaCheck } from "react-icons/fa";
import { BsTruck } from "react-icons/bs";

const AddToCartButton = () => {
    const [isCartAnimating, setIsCartAnimating] = useState(false);
    const [isCartAdded, setIsCartAdded] = useState(false);

    const handleCartClick = () => {
        setIsCartAnimating(true);
        setTimeout(() => {
            setIsCartAnimating(false);
            setIsCartAdded(true);
        }, 2000);
    };

    return (
        <div className=" ">
            <div className="relative">
                <button
                    onClick={handleCartClick}
                    aria-label="Add to Cart"
                    className="relative w-36 h-12 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg
          shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 flex items-center justify-center overflow-hidden"
                >
                    <div className="flex items-center">
                        {isCartAnimating ? (
                            <BsTruck className="animate-truck text-xl" />
                        ) : isCartAdded ? (
                            <>
                                <FaCheck className="mr-2" />
                                Added to Cart
                            </>
                        ) : (
                            <>
                                <FaShoppingCart className="mr-2" />
                                Add to Cart
                            </>
                        )}
                    </div>
                </button>
            </div>
        </div>
    );
};

export default AddToCartButton;