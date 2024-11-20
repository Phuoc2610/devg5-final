import React, { useState } from "react";
import { FaChevronRight, FaChevronLeft, FaSearch } from "react-icons/fa";
import { MdOutlineHome, MdLogout } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
const SidebarAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate()

    return (
        <div className="flex">
            {/* Sidebar */}
            <div
                className={`bg-white ${isOpen ? "w-64" : "w-20"
                    } h-screen transition-all duration-300 relative shadow-md`}
            >
                {/* Logo */}
                <div className="flex items-center p-4">
                    <div className="bg-gray-400 rounded-md w-10 h-10 flex items-center justify-center text-xl font-bold">
                        CL
                    </div>
                    {isOpen && (
                        <div className="ml-4">
                            <h1 className="text-lg font-semibold">Codinglab</h1>
                            <p className="text-sm">Web developer</p>
                        </div>
                    )}
                </div>

                {/* Toggle Button */}
                <button
                    className="absolute top-4 -right-4 bg-gray-400 text-black rounded-full p-2 shadow-md"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
                </button>

                {/* Search Box */}
                <div
                    className={`flex items-center mt-4 rounded-md p-2 ${isOpen ? "mx-4 bg-gray-200" : "mx-2"
                        }`}
                >
                    <FaSearch />
                    {isOpen && (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent border-none outline-none ml-2 text-black"
                        />
                    )}
                </div>

                {/* Menu Items */}
                <ul className="mt-6">
                    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer" onClick={() => { navigate('') }}>
                        <MdOutlineHome size={25} />
                        {isOpen && <span className="ml-4">Dashboard</span>}
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer" onClick={() => { navigate('category') }}>
                        <BiCategory size={25} />
                        {isOpen && <span className="ml-4">Category</span>}
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer" onClick={() => { navigate('user') }}>
                        <PiUserListBold size={25} />
                        {isOpen && <span className="ml-4">User</span>}
                    </li>
                    <li className="flex items-center p-4 hover:bg-gray-300 cursor-pointer" >
                        <MdLogout size={25} />
                        {isOpen && <span className="ml-4">Logout</span>}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SidebarAdmin