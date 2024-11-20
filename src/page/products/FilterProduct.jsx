import React from 'react'
import ListFilter from '../../components/filter/ListFilter'
import ListProduct from '../../components/products/ListProduct'
import Navbar from '../../components/navbar/Narbar'
import Sidebar from '../../components/sidebar/Sidebar'

const FilterProduct = () => {
  return (
    <div className="scroll-smooth bg-white dark:bg-gray-900 dark:text-gray-300">
      <Navbar />
      <Sidebar />
      <div className="w-[90%] mx-auto flex justify-between scroll-smooth">
        <ListFilter />
        <ListProduct />
      </div>
    </div>
  )
}

export default FilterProduct