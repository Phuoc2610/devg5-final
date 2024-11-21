import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import AOS from 'aos';
import "aos/dist/aos.css"
import ProductDetail from './components/products/ProductDetail';
import FilterProduct from './page/products/FilterProduct';
import Contact from './page/contact/Contact';
import Admin from './page/admin/home/Admin';
import DashboardAdmin from './page/admin/dashboard/DashboardAdmin';
import CategoryManage from './page/admin/category/CategoryManage';
import UserManage from './page/admin/user/UserManage';

function App() {
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
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />}>
            <Route path="" element={<DashboardAdmin />} />
            <Route path="category" element={<CategoryManage />} />
            <Route path="user" element={<UserManage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/productFilter" element={<FilterProduct />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
