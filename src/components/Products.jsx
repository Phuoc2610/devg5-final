import React from 'react';
import Image1 from "../assets/product/p-1.jpg";
import Image2 from "../assets/product/p-2.jpg";
import Image3 from "../assets/product/p-3.jpg";
import Image4 from "../assets/product/p-4.jpg";
import Image5 from "../assets/product/p-5.jpg";
import Image6 from "../assets/product/p-9.jpg";
import Image7 from "../assets/product/p-7.jpg";
const ProductsData = [
    {
        id: 1,
        img: Image1,
        title: "Boat Headphone",
        price: "120",
    },
    {
        id: 2,
        img: Image2,
        title: "Boat Headphone",
        price: "120",
    },
    {
        id: 3,
        img: Image3,
        title: "Boat Headphone",
        price: "120",
    },
    {
        id: 4,
        img: Image4,
        title: "Boat Headphone",
        price: "120",
    },
    {
        id: 5,
        img: Image5,
        title: "Boat Headphone",
        price: "120",
    },
    {
        id: 6,
        img: Image6,
        title: "Boat Headphone",
        price: "120",
    },
    {
        id: 7,
        img: Image7,
        title: "Boat Headphone",
        price: "120",
    },
    {
        id: 8,
        img: Image7,
        title: "Boat Headphone",
        price: "120",
    },
]

const Products = () => {
    return (
        <div>
            <div>
                <div className="text-center my-10 max-w-[600px] mx-auto space-y-2">
                    <h1 className="text-3xl font-bold lg:text-4xl">Our Products</h1>
                    <p className="text-xs text-gray-400">Explore Our Products</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
                    {
                        ProductsData.map((data) => (
                            <div
                                data-aos="fade-up"
                                data-aos-delay="200"
                                key={data.id}>
                                <div className="relative">
                                    <img src={data.img} alt="" className="h-[180px] w-[260px] object-cover rounded-md" />
                                </div>
                                <div className="leading-7">
                                    <h2 className="font-semibold">{data.title}</h2>
                                    <h2 className="font-bold">{data.price}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products