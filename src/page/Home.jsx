import React from 'react';
import Navbar from "../components/Narbar";
import Carousel from "../components/Carousel";
import Services from '../components/Services';
import Blog from '../components/Blog';
import Products from '../components/Products';
import AOS from 'aos';
import "aos/dist/aos.css"
const Home = ()=> {
    React.useEffect(()=>{
        AOS.init(
            {
                duration: 800,
                easing: "ease-in-sine",
                delay: 100,
                offset: 100,
            }
        );
        AOS.refresh()
    },[])
    return (
        <div className=" w-[90%] mx-auto bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden">
            <Navbar/>
            <Carousel/>
            <Services/>
            <Products/>
            <Blog/>
        </div>
    );
}

export default Home;
