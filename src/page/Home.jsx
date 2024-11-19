import React from 'react';
import Navbar from "../components/navbar/Narbar";
import Carousel from "../components/carousel/Carousel";
import Services from '../components/support/Services';
import Blog from '../components/blog/Blog';
import Products from '../components/products/Products';
import AOS from 'aos';
import "aos/dist/aos.css"
import Sidebar from '../components/sidebar/Sidebar';
import Footer from '../components/footer/Footer';
const Home = () => {
    React.useEffect(() => {
        AOS.init(
            {
                duration: 800,
                easing: "ease-in-sine",
                delay: 100,
                offset: 100,
            }
        );
        AOS.refresh()
    }, [])
    return (
        <div className="w-full bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <div className="fixed z-20 top-0 w-full">
                <Navbar />
            </div>
            <Carousel />
            <Services />
            <Products />
            <Blog />
            <Footer />
            <Sidebar />
        </div>
    );
}

export default Home;
