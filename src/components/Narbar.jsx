const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="flex items-center justify-around">
                    <a href="#" className="text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl">DevG5</a>
                    <div >
                        <ul className="flex items-center gap-4">
                            <li>
                                <a href="/#" className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"> Home</a>
                            </li>
                            <li>
                                <a href="/#shop" className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"> Product</a>
                            </li>
                            <li>
                                <a href="/#about" className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"> About</a>
                            </li>
                            <li>
                                <a href="/#blog" className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"> Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
