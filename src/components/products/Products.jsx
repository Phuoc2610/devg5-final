// import React, { useState } from 'react';
// import Image1 from "../assets/category/earphone.png";
// import Image2 from "../assets/category/gaming.png";
// import Image3 from "../assets/category/macbook.png";
// import Image4 from "../assets/category/smartwatch2-removebg-preview.png";
// import Image5 from "../assets/category/speaker.png";
// import Image6 from "../assets/category/vr.png";
// import Image7 from "../assets/category/watch.png";
// const ProductsData = [
//     {
//         id: 1,
//         img: Image1,
//         title: "Boat Headphone",
//         discountPrice: "150$",
//         storage: "128GB",
//         price: "120$",
//         color: "bg-black"
//     },
//     {
//         id: 2,
//         img: Image2,
//         title: "Boat Headphone",
//         discountPrice: "150$",
//         storage: "128GB",
//         price: "120$",
//         color: "bg-black"
//     },
//     {
//         id: 3,
//         img: Image3,
//         title: "Boat Headphone",
//         discountPrice: "150$",
//         storage: "128GB",
//         price: "120$",
//         color: "bg-black"
//     },
//     {
//         id: 4,
//         img: Image4,
//         title: "Boat Headphone",
//         discountPrice: "150$",
//         storage: "128GB",
//         price: "120$",
//         color: "bg-black"
//     },
//     {
//         id: 5,
//         img: Image5,
//         title: "Boat Headphone",
//         discountPrice: "150$",
//         storage: "128GB",
//         price: "120$",
//         color: "bg-black"
//     },
//     {
//         id: 6,
//         img: Image6,
//         title: "Boat Headphone",
//         discountPrice: "150$",
//         storage: "128GB",
//         price: "120$",
//         color: "bg-black"
//     },
//     {
//         id: 7,
//         img: Image7,
//         title: "Boat Headphone",
//         discountPrice: "150$",
//         storage: "128GB",
//         price: "120$",
//         color: "bg-black"
//     },
//     {
//         id: 8,
//         img: Image1,
//         title: "Boat Headphone",
//         discountPrice: "150$",
//         storage: "128GB",
//         price: "120$",
//         color: "bg-black"
//     },
// ]

// const Products = () => {
//     return (
//         <div>
//             <div>
//                 <div className="text-center my-10 max-w-[600px] mx-auto space-y-2">
//                     <h1 className="text-3xl font-bold lg:text-4xl">Our Products</h1>
//                     <p className="text-xs text-gray-400">Explore Our Products</p>
//                 </div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
//                     {
//                         ProductsData.map((data) => (
//                             <div
//                                 className="bg-[#e5e7eb94] px-10 py-5 rounded-lg grid place-items-center"
//                                 data-aos="fade-up"
//                                 data-aos-delay="200"
//                                 key={data.id}>
//                                 <div className="relative">
//                                     <img src={data.img} alt="" className="h-[180px] w-[180px] object-cover rounded-md bg-transparent" />
//                                 </div>
//                                 <h2 className="font-semibold ">{data.title}</h2>
//                                 <div className="flex items-center py-1">
//                                     <h2 className="px-2">Color: </h2>
//                                     <div className={`h-4 w-4 ${data.color} rounded-full`}></div>
//                                 </div>
//                                 <div className="border-solid border-[1px] border-black px-2 rounded-md">{data.storage}</div>
//                                 <div className="flex justify-around w-full py-1">
//                                     <h2 className="font-bold">{data.price}</h2>
//                                     <h2 className="font-normal line-through">{data.discountPrice}</h2>
//                                 </div>
//                                 <div className="flex items-center py-1">
//                                     <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                     <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
//                                         <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
//                                     </svg>
//                                 </div>
//                                 <button className="bg-blue-500 px-4 py-2 rounded-lg my-1">Add to card</button>
//                             </div>
//                         ))
//                     }
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Products

import React, { useState, useEffect } from 'react';
import Image1 from "../../assets/category/earphone.png";
import Image2 from "../../assets/category/gaming.png";
import Image3 from "../../assets/category/macbook.png";
import Image4 from "../../assets/category/smartwatch2-removebg-preview.png";
import Image5 from "../../assets/category/speaker.png";
import Image6 from "../../assets/category/vr.png";
import Image7 from "../../assets/category/watch.png";
import Pagination from './Pagination';

const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 2,
        img: Image2,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 3,
        img: Image3,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 4,
        img: Image4,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 5,
        img: Image5,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 6,
        img: Image6,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 7,
        img: Image7,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 8,
        img: Image1,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 9,
        img: Image1,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 10,
        img: Image2,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 11,
        img: Image3,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 12,
        img: Image4,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 13,
        img: Image5,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 14,
        img: Image6,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 15,
        img: Image7,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
    {
        id: 16,
        img: Image1,
        title: "Boat Headphone",
        discountPrice: "150$",
        storage: "128GB",
        price: "120$",
        color: "bg-black"
    },
];

const Products = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = ProductsData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(ProductsData.length / itemsPerPage);
    return (
        <div className="w-[90%] mx-auto">
            <div className="w-full">
                <div className="text-center my-10 max-w-[600px] mx-auto space-y-2">
                    <h1 className="text-3xl font-bold lg:text-4xl">Our Products</h1>
                    <p className="text-xs text-gray-400">Explore Our Products</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                    {currentProducts.map((data) => (
                        <div
                            className="bg-[#e5e7eb94] px-16 py-5 rounded-lg grid place-items-center"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            key={data.id}>
                            <div className="relative">
                                <img src={data.img} alt="" className="h-[180px] w-[180px] object-cover rounded-md bg-transparent" />
                            </div>
                            <h2 className="font-semibold text-lg">{data.title}</h2>
                            <div className="flex items-center py-1">
                                <h2 className="px-2">Color: </h2>
                                <div className={`h-4 w-4 ${data.color} rounded-full`}></div>
                            </div>
                            <div className="border-solid border-[1px] border-black px-2 rounded-md">{data.storage}</div>
                            <div className="flex justify-around w-full py-1">
                                <h2 className="font-bold">{data.price}</h2>
                                <h2 className="font-normal line-through">{data.discountPrice}</h2>
                            </div>
                            <div className="flex items-center py-1">
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 text-yellow-300 ms-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                            </div>
                            <button className="bg-blue-500 px-4 py-2 rounded-lg my-1">Add to card</button>
                        </div>
                    ))}
                </div>
                {/* Pagination */}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}

export default Products;

{/* <nav className="grid place-items-center my-5" aria-label="Page navigation example">
<ul className="flex items-center -space-x-px h-8 text-sm">
    <li>
        <a
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight cursor-pointer text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(currentPage > 1 ? currentPage - 1 : currentPage)}>
            <span className="sr-only">Previous</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
            </svg>
        </a>
    </li>
    {[...Array(totalPages)].map((_, index) => (
        <li key={index}>
            <a
                className={`flex items-center justify-center px-3 h-8 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === index + 1 ? 'bg-blue-50 text-blue-600' : ''}`}
                onClick={() => handlePageChange(index + 1)}>
                {index + 1}
            </a>
        </li>
    ))}
    <li>
        <a
            className="flex items-center justify-center px-3 h-8 leading-tight cursor-pointer text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            onClick={() => handlePageChange(currentPage < totalPages ? currentPage + 1 : currentPage)}>
            <span className="sr-only">Next</span>
            <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
            </svg>
        </a>
    </li>
</ul>
</nav> */}