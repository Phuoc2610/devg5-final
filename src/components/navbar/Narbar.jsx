import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="navbar bg-white dark:bg-gray-900 shadow-md">
            <div className="flex items-center justify-between max-w-screen-xl mx-auto px-4 py-3 md:py-4">
                <div className="flex">
                    <a href="#" className="hidden md:block text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">
                        DevG5
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
                    <ul className="hidden md:flex items-center gap-4">
                        <li>
                            <a href="/#" className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/#shop" className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                Product
                            </a>
                        </li>
                        <li>
                            <a href="/#about" className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                About
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center">
                    <form class="max-w-md mx-auto">
                        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div class="relative">
                            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
                            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                    <Link to="/login" className="">
                        Login
                    </Link>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg">
                    <ul className="flex flex-col items-start gap-4 p-4">
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
                            <a href="/#blog" className="inline-block font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                Login
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;
