import React, { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import PriceRange from "../filter/PriceRange";
import RatingFilter from "../filter/RatingFilter";
import ColorFilter from "../filter/ColorFilter";
import CategoryFilter from "../filter/CategoryFilter";
import BrandFilter from "../filter/BrandFilter";

const ListFilter = () => {
    const [openSection, setOpenSection] = useState({
        category: true,
        brand: true,
        price: true,
        rating: true,
        color: true,
    });

    const handleToggleSection = (section) => {
        setOpenSection({ ...openSection, [section]: !openSection[section] });
    };

    return (
        <div className="p-4 bg-white rounded-lg w-64 h-90v overflow-y-auto">
            {/* Categories */}
            <div className="mb-4">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggleSection("category")}
                >
                    <h3 className="font-semibold text-lg">Categories</h3>
                    <span>{openSection.category ? <><FaChevronDown /></> : <><FaChevronUp /></>}</span>
                </div>
                {openSection.category && (
                    <CategoryFilter/>
                )}
            </div>

            {/* Brands */}
            <div className="mb-4">
                <div
                    className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggleSection("brand")}
                >
                    <h3 className="font-semibold text-lg">Brands</h3>
                    <span>{openSection.brand ? <><FaChevronDown /></> : <><FaChevronUp /></>}</span>
                </div>
                {openSection.brand && (
                    <BrandFilter/>
                )}
            </div>
            <div className="mb-4">
                <div className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggleSection("color")}>
                    <h3 className="font-semibold text-lg">Color</h3>
                    <span>{openSection.rating ? <><FaChevronDown /></> : <><FaChevronUp /></>}</span>
                </div>
                {openSection.color && (
                    <ColorFilter />
                )}
            </div>
            {/* Price */}
            <div className="mb-4">
                <PriceRange />
            </div>

            <div className="mb-4">
                <div className="flex justify-between items-center cursor-pointer"
                    onClick={() => handleToggleSection("rating")}>
                    <h3 className="font-semibold text-lg">Rating</h3>
                    <span>{openSection.rating ? <><FaChevronDown /></> : <><FaChevronUp /></>}</span>
                </div>
                {openSection.rating && (
                    <RatingFilter />
                )}
            </div>
        </div >
    );
};

export default ListFilter;