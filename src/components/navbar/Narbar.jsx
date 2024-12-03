import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import User from '../../page/profile/User';

const Navbar = ({ backgroundClass }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`w-full z-20 dark:bg-gray-900 ${backgroundClass}`}>
            <div className="flex items-center justify-between w-[90%] mx-auto px-4">
                <a href="" className=" text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                    DevSHOP
                </a>
                <button
                    className="text-gray-500 dark:text-white md:hidden focus:outline-none"
                    onClick={toggleMenu}
                >
                    <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
                <div className="hidden md:block ">
                    <ul className="flex items-center gap-5 p-4">
                        <li>
                            <a href="/#" className="inline-block font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/#shop" className="inline-block font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="/#about" className="inline-block font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                About
                            </a>
                        </li>
                        <li>
                            <Link className="item-navbar" to="/shoppingCart">
                                <MdOutlineShoppingCart size={25} />
                            </Link>
                        </li>
                        {!isLogin ?
                            <>
                                <User />
                            </> :
                            <>
                                <Link to="/login" className="btn-add">
                                    Login
                                </Link>
                            </>}
                    </ul>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
                    <ul className="flex flex-col items-center gap-4 p-4">
                        <li>
                            <a href="/#" className="inline-block font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/#shop" className="inline-block font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="/#about" className="inline-block font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                About
                            </a>
                        </li>
                        <li>
                            <Link className="item-navbar" to="/shoppingCart">
                                <MdOutlineShoppingCart size={25} />
                            </Link>
                        </li>
                        {!isLogin ?
                            <>
                                <User />
                            </> :
                            <>
                                <Link to="/login" className="btn-add">
                                    Login
                                </Link>
                            </>}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
