import React, { useState, useEffect } from 'react';
import DataTable, { createTheme } from 'react-data-table-component';
import { FaSearch } from "react-icons/fa";
import AddBrand from '../../../components/brand/AddBrand';
import EditBrand from '../../../components/brand/EditBrand';

createTheme('dark', {
    text: {
        primary: '#e5e7eb',
        secondary: '#9ca3af',
    },
    background: {
        default: '#1f2937',
    },
    context: {
        background: '#374151',
        text: '#ffffff',
    },
    divider: {
        default: '#4b5563',
    },
    action: {
        button: '#4f46e5',
        hover: 'rgba(255, 255, 255, 0.1)',
        disabled: 'rgba(255, 255, 255, 0.3)',
    },
}, 'dark');

const BrandManage = () => {
    // Open Modal
    const [isAddBrandOpen, setIsAddBrandOpen] = useState(false);
    const [isEditBrandOpen, setIsEditBrandOpen] = useState(false);
    // Responsive Table
    const [scrollHeight, setScrollHeight] = useState("430px");
    const updateScrollHeight = () => {
        if (window.innerWidth < 768) {
            setScrollHeight("400px");
        } else if (window.innerWidth < 1024) {
            setScrollHeight("440px");
        } else if (window.innerWidth < 1280) {
            setScrollHeight("460px");
        } else {
            setScrollHeight("650px");
        }
    };
    useEffect(() => {
        updateScrollHeight(); // Cập nhật ngay khi component render lần đầu
        window.addEventListener("resize", updateScrollHeight); // Lắng nghe sự kiện thay đổi kích thước
        return () => window.removeEventListener("resize", updateScrollHeight); // Cleanup
    }, []);
    // Fetch data
    const columns = [
        {
            name: "Id",
            selector: row => row.id,
            sortable: true,
            center: true,

        },
        {
            name: "Name",
            selector: row => row.name,
            sortable: true,
            center: true,
        },
        {
            name: "Image",
            selector: (row) => row.image,
            cell: (row) => (
                <img
                    src={row.image}
                    alt={row.name}
                    className="w-10 h-10 object-cover rounded-md"
                />
            ),
            sortable: false,
            center: true,
        },
        {
            name: 'Action',
            center: true,
            cell: (row) => (
                <div className="max-md:flex max-md:w-56">
                    <button
                        className="bg-yellow-400 text-white px-2 py-1 rounded mr-2"
                        onClick={() => setIsEditBrandOpen(true)}
                    >
                        Edit
                    </button>
                    <button
                        className="bg-red-500 text-white px-2 py-1 rounded"
                        onClick={() => handleDelete(row)}
                    >
                        Delete
                    </button>
                </div>
            ),
        }
    ]
    const data = [
        {
            id: 1,
            name: "Apple",
            image: "www.example.com/images/apple-logo.png",
        },
        {
            id: 2,
            name: "Samsung",
            image: "www.example.com/images/samsung-logo.png",
        },
        {
            id: 3,
            name: "Sony",
            image: "www.example.com/images/sony-logo.png",
        },
        {
            id: 4,
            name: "Microsoft",
            image: "www.example.com/images/microsoft-logo.png",
        },

    ];
    const [records, setRecords] = useState(data);

    // Button delete
    const handleDelete = (row) => {
        const confirm = window.confirm(`Are you sure you want to delete ${row.name}?`);
        if (confirm) {
            alert(`User ${row.name} has been deleted.`);
        }
    };
    const handleFiter = (event) => {
        const newData = data.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase())
        })
        setRecords(newData);
    }

    return (
        <div className="h-screen">
            <h1 className="grid place-items-center text-4xl py-4 text-white">Manage Brand</h1>
            <button
                className="btn-add my-2 ml-6 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => setIsAddBrandOpen(true)}
            >
                Add Brand
            </button>
            <div className="w-[90%] lg:w-[70%] mx-auto  rounded-md shadow-md">
                <div className="flex justify-end my-2">
                    <div className="w-48 md:w-64 flex items-center rounded-md px-2 bg-gray-800">
                        <FaSearch className="flex items-center justify-center w-10 text-white" />
                        <input
                            type="text"
                            onChange={handleFiter}
                            placeholder="Search..."
                            className="bg-transparent w-44 border-none outline-none text-white  focus:ring-0"
                        />
                    </div>
                </div>
                <div className="overflow-hidden">
                    <DataTable
                        theme='dark'
                        columns={columns}
                        data={records}
                        fixedHeader
                        pagination
                        fixedHeaderScrollHeight={scrollHeight}
                        paginationPosition="bottom"
                    />
                </div>
            </div>
            {/* Modal */}
            {isAddBrandOpen && (
                <AddBrand onClose={() => setIsAddBrandOpen(false)} />
            )}
            {isEditBrandOpen && (
                <EditBrand onClose={() => setIsEditBrandOpen(false)} />
            )}
        </div>
    )
}

export default BrandManage