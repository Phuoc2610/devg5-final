import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Login from './page/Login';
import AOS from 'aos';
import ProductDetail from './components/products/ProductDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
