import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import AOS from 'aos';
import ProductDetail from './components/products/ProductDetail';
import FilterProduct from './page/products/FilterProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/productFilter" element={<FilterProduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
