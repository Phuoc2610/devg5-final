import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Stepper from "../../components/stepper/Stepper";
import CartItem from "../../components/cart/CartItem";
import CartSummary from "../../components/cart/CartSummary";
import VoucherApply from "../../components/voucher/VoucherApply";
import Navbar from "../../components/navbar/Narbar";
import Sidebar from "../../components/sidebar/Sidebar";
import ConfirmInfoPayment from "../../components/payment/ConfirmInfoPayment"
import { Link } from "react-router-dom";
const ShoppingCart = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "iPhone 13 Pro",
            price: 100,
            quantity: 1,
            image: "images.unsplash.com/photo-1511707171634-5f897ff02aa9",
            category: "phones"
        },
        {
            id: 2,
            name: "MacBook Pro M1",
            price: 200,
            quantity: 1,
            image: "images.unsplash.com/photo-1517336714731-489689fd1ca8",
            category: "laptops"
        },
        {
            id: 3,
            name: "AirPods Pro",
            price: 50,
            quantity: 1,
            image: "images.unsplash.com/photo-1572569511254-d8f925fe2cbb",
            category: "headphones"
        },
        {
            id: 4,
            name: "Samsung Galaxy S22",
            price: 90,
            quantity: 1,
            image: "images.samsung.com/is/image/samsung/p6pim/vn/2202/gallery/vn-galaxy-s22-ultra-s908-sm-s908edrgxxv-thumb-530768591",
            category: "phones"
        },
        {
            id: 5,
            name: "Dell XPS 13",
            price: 150,
            quantity: 1,
            image: "images.unsplash.com/photo-1587829741301-dc798b83add3",
            category: "laptops"
        },
        {
            id: 6,
            name: "Sony WH-1000XM4",
            price: 120,
            quantity: 1,
            image: "images.unsplash.com/photo-1593642634443-44adaa06623a",
            category: "headphones"
        }
    ]);

    const [currentStep] = useState(0);
    const [discount, setDiscount] = useState(0);

    const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const tax = subtotal * 0.1;
    const shipping = 0;
    const total = subtotal + tax + shipping - discount;

    const handleUpdateQuantity = (id, quantity) => {
        if (quantity < 1) return;
        setItems(items.map(item => item.id === id ? { ...item, quantity } : item));
    };

    const handleRemoveItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    };

    const handleApplyVoucher = (code) => {
        if (code.toLowerCase() === "discount20") {
            setDiscount(subtotal * 0.2);
        }
    };

    return (
        <div className="w-full">
            <Navbar />
            <Sidebar />
            {currentStep === 2 && (
                <>
                    <div className="grid place-items-center bg-white dark:bg-gray-900 dark:text-gray-300 pt-28">
                        <FaCheckCircle className="text-[120px] text-emerald-500 " />
                        <h1 className="text-4xl font-semibold">Payment Successful!</h1>
                        <p className="text-lg mt-2">Thank you for your purchase.</p>
                        <Link className="btn-add bg-emerald-500 mt-4" to="/">
                            Back to Shop
                        </Link>
                    </div>
                </>
            )}
            <div className="bg-white dark:bg-gray-900 py-6 px-4 sm:px-6 lg:px-8">
                <div className=" max-w-7xl mx-auto">
                    {(currentStep === 0 || currentStep === 1) && (
                        <>
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Shopping Cart</h1>
                            <Stepper currentStep={currentStep} />
                        </>
                    )}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            {currentStep === 0 && (
                                <>
                                    {items.map(item => (
                                        <CartItem
                                            key={item.id}
                                            item={item}
                                            onUpdateQuantity={handleUpdateQuantity}
                                            onRemove={handleRemoveItem}
                                        />
                                    ))}
                                    {items.length === 0 && (
                                        <div className="text-center py-8 text-gray-400">
                                            Your cart is empty
                                        </div>
                                    )}
                                </>
                            )}
                            {currentStep === 1 && (
                                <>
                                    <ConfirmInfoPayment />
                                </>
                            )}
                        </div>
                        <div className="space-y-6">
                            {(currentStep === 0 || currentStep === 1) && (
                                <>
                                    <VoucherApply onApply={handleApplyVoucher} />
                                    <CartSummary
                                        subtotal={subtotal}
                                        tax={tax}
                                        shipping={shipping}
                                        total={total}
                                        discount={discount}
                                    />
                                    {currentStep === 0 && (
                                        <>
                                            <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                                Checkout
                                            </button>
                                        </>
                                    )}
                                    {currentStep === 1 && (
                                        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                                            Confirm Payment
                                        </button>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCart;