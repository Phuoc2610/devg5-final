import React from 'react'
import ListFilter from '../../components/products/ListFilter'
import ListProduct from '../../components/products/ListProduct'
import Navbar from '../../components/navbar/Narbar'
import Sidebar from '../../components/sidebar/Sidebar'

const FilterProduct = () => {
  return (
    <div className="h-100v">
      <Navbar />
      <Sidebar />
      <div className="w-[90%] mx-auto">
        <ListFilter />
        <ListProduct />
      </div>
    </div>
  )
}

export default FilterProduct