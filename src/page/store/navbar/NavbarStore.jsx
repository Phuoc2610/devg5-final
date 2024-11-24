import React, { useState } from 'react'
import { MdOutlineHome, MdLogout } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { FaBarcode } from "react-icons/fa";
import { PiUserListBold } from "react-icons/pi";
import { BiCategory } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
import Image from "../../../assets/robot-assistant.png"
const NavbarStore = () => {
  const [activeItem, setActiveItem] = useState(""); // Trạng thái lưu mục active
  const navigate = useNavigate();

  const menuItems = [
    { name: "DashboardStore", icon: <MdOutlineHome size={25} />, path: "" },
    { name: "Product", icon: <BiCategory size={25} />, path: "product" },
    { name: "Voucher", icon: <FaBarcode size={25} />, path: "voucher" },
    { name: "ChatStore", icon: <IoMdChatboxes size={25} />, path: "chat" },
    { name: "Logout", icon: <MdLogout size={25} />, path: "logout" },
  ];
  const handleClick = (path) => {
    setActiveItem(path); // Cập nhật trạng thái mục được chọn
    navigate(path); // Điều hướng đến đường dẫn tương ứng
  };
  return (
    <div className="flex justify-around py-4">
      <div className="flex items-center">
        <img src={Image} alt="" className="w-8 h-8" />
      </div>
      <div className="ml-2">
        <ul className="flex">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center p-2 cursor-pointer rounded-lg mx-1 ${activeItem === item.path ? "bg-gray-300" : "hover:bg-gray-200"
                }`}
              onClick={() => handleClick(item.path)}
            >
              <div className="flex items-center justify-center w-7 ">{item.icon}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NavbarStore