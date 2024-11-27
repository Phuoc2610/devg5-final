import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css"
import Home from './page/home/Home';
import ProductDetail from './components/products/ProductDetail';
import FilterProduct from './page/products/FilterProduct';
import Contact from './page/contact/Contact';
import Admin from './page/admin/home/Admin';
import DashboardAdmin from './page/admin/dashboard/DashboardAdmin';
import CategoryManage from './page/admin/category/CategoryManage';
import UserManage from './page/admin/user/UserManage';
import Profile from './page/profile/Profile';
import ShoppingCart from './page/cart/ShoppingCart';
import ChatInterface from './page/chat/ChatInterface';
import Login from './page/login/Login';
import Store from './page/store/home/Store';
import DashboardStore from './page/store/dashboard/DashboardStore';
import ProductManage from './page/store/products/ProductManage';
import VoucherManage from './page/store/voucher/VoucherManage';
import ChatStore from './page/store/chat/ChatStore';
import BrandManage from './page/admin/brand/BrandManage';

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
            <Route path="brand" element={<BrandManage />} />
            <Route path="user" element={<UserManage />} />
          </Route>
          <Route path="/store" element={<Store />}>
            <Route path="" element={<DashboardStore />} />
            <Route path="product" element={<ProductManage />} />
            <Route path="voucher" element={<VoucherManage />} />
            <Route path="chat" element={<ChatStore />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/productFilter" element={<FilterProduct />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/chat" element={<ChatInterface />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
