import React, { useEffect, useState } from "react";
import { FaChevronRight, FaChevronLeft, FaSearch, FaMoon, FaSun } from "react-icons/fa";
import { MdOutlineHome, MdLogout } from "react-icons/md";
import { PiUserListBold } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { SiBrandfolder } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import Image from "../../../assets/robot-assistant.png"
const SidebarAdmin = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(""); // Trạng thái lưu mục active
    const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true"); // Trạng thái dark mode

    const navigate = useNavigate();

    const menuItems = [
        { name: "Dashboard", icon: <MdOutlineHome size={25} />, path: "" },
        { name: "Category", icon: <BiCategory size={25} />, path: "category" },
        { name: "Brand", icon: <SiBrandfolder size={25} />, path: "brand" },
        { name: "User", icon: <PiUserListBold size={25} />, path: "user" },
        { name: "Logout", icon: <MdLogout size={25} />, path: "logout" },
    ];

    const handleClick = (path) => {
        setActiveItem(path); // Cập nhật trạng thái mục được chọn
        navigate(path); // Điều hướng đến đường dẫn tương ứng
    };
    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("darkMode", newMode); // Lưu trạng thái vào localStorage
        document.documentElement.classList.toggle("dark", newMode); // Cập nhật lớp CSS
    };

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    return (
        <div className="">
            <div className="flex md:hidden justify-around py-2 ">
                <div className="flex items-center">
                    <img src={Image} alt="" className="w-8 h-8" />
                </div>
                <div className="ml-2">
                    <ul className="flex">
                        {menuItems.map((item, index) => (
                            <li
                                key={index}
                                className={`flex items-center p-2 cursor-pointer rounded-lg mx-1 ${activeItem === item.path ? "bg-gray-100" : "hover:bg-gray-200"
                                    }`}
                                onClick={() => handleClick(item.path)}
                            >
                                <div className="flex items-center justify-center w-7 ">{item.icon}</div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* Sidebar */}
            <div
                className={`bg-white dark:bg-gray-800 max-md:hidden h-screen ${isOpen ? "w-64" : "w-20"
                    }  transition-all duration-300 relative shadow-md`}
            >
                {/* Logo */}
                <div className="flex items-center p-4">
                    <img src={Image} alt="" className="w-10 h-10" />
                    {isOpen && (
                        <div className="ml-4">
                            <h1 className="text-xl font-semibold dark:text-white">DevShop</h1>
                        </div>
                    )}
                </div>

                {/* Toggle Button */}
                <button
                    className="absolute top-5 -right-4 bg-white dark:bg-gray-800 text-black dark:text-white rounded-full p-2 shadow-md"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FaChevronLeft /> : <FaChevronRight />}
                </button>

                {/* Dark Mode Toggle */}
                <div className="flex items-center mt-4 py-4 hover:bg-gray-300 dark:hover:bg-gray-700">
                    <button
                        className=" text-black dark:text-white px-4 rounded-full  flex items-center"
                        onClick={toggleDarkMode}
                    >

                        <div className="flex items-center justify-center w-10">{darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}</div>
                        {isOpen && <span className="ml-4">{darkMode ? <>Light Theme</> : <>Dark Theme</>}</span>}
                    </button>
                </div>
                {/* Search Box */}
                <div
                    className={`flex items-center mt-4 rounded-md px-2 ${isOpen ? " mx-2 py-2 bg-gray-300 dark:bg-gray-700 " : "mx-2"
                        }`}
                >
                    <FaSearch className="flex items-center justify-center w-10 dark:text-white" />
                    {isOpen && (
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent w-44 border-none outline-none text-black dark:text-white dark:bg-gray-700 focus:ring-0"
                        />
                    )}
                </div>
                {/* Menu Items */}
                <ul className="mt-6 ">
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={`flex items-center p-4 cursor-pointer text-black dark:text-white  ${activeItem === item.path ? "bg-gray-300 dark:bg-gray-700" : "hover:bg-gray-300 dark:hover:bg-gray-700"
                                }`}
                            onClick={() => handleClick(item.path)}
                        >
                            <div className="flex items-center justify-center w-10">{item.icon}</div>
                            {isOpen && <span className="ml-4">{item.name}</span>}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default SidebarAdmin

