import React from 'react';
import Navbar from "../components/navbar/Narbar";
import Carousel from "../components/carousel/Carousel";
import Services from '../components/support/Services';
import Blog from '../components/blog/Blog';
import Products from '../components/products/Products';
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
const Home = () => {
    return (
        <div className="w-full bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <div className="fixed z-20 top-0 w-full">
                <Navbar />
            </div>
            <Carousel />
            <Services />
            <Products itemsPerPage={4} />
            <Blog />
            <Footer />
            <Sidebar />
        </div>
    );
}

export default Home;
