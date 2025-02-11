import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home/Home';
import ProductDetails from './pages/productDetails/ProductDetails';
import Cart from './pages/cart/Cart';
import Billing from './pages/billing/Billing';
import OrderConfirmed from './pages/orderConfirmed/OrderConfirmed';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route  path="/product/:id" element={<ProductDetails />}/>
          <Route  path="/cart" element={<Cart />}/>
          <Route  path="/billing" element={<Billing />}/>
          <Route  path="/order-comfirmed" element={<OrderConfirmed />}/>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
