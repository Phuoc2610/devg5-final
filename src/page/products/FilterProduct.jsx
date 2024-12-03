import React from 'react'
import ListFilter from '../../components/filter/ListFilter'
import ListProduct from '../../components/products/ListProduct'
import Navbar from '../../components/navbar/Narbar'
import Sidebar from '../../components/sidebar/Sidebar'
import BackToTop from '../../components/backToTop/BackToTop'

const FilterProduct = () => {
  return (
    <div className="scroll-smooth bg-white dark:bg-gray-900 dark:text-gray-300">
      <Navbar />
      {/* <Sidebar /> */}
      <BackToTop/>
      <div className="w-[90%] mx-auto flex justify-between scroll-smooth">
        <ListFilter />
        <ListProduct />
      </div>
    </div>
  )
}

export default FilterProduct