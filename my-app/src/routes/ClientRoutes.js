import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../pages/client/component/Home';
import Products from '../pages/client/component/Products';
import About from '../pages/client/component/About';
import Contact from '../pages/client/component/Contact';
import SignIn from '../pages/client/component/SignIn';
import SignUp from '../pages/client/component/SignUp';
import Footer from '../pages/client/component/Footer';
import Navbar from '../pages/client/component/Navbar';
import ProductDetails from '../pages/client/component/ProductDetails';
import Cart from '../pages/client/component/Cart';
import CheckoutForm from '../pages/client/component/CheckoutForm';
import OrderHistory from '../pages/client/component/OrderHistory';
import OrderDetail from '../pages/client/component/OrderDetail';

const ClientRoutes = () => {
  const location = useLocation();

  // Danh sách các trang mà Footer sẽ không hiển thị
  const noFooterRoutes = ['/signin', '/signup', '/cart', '/orderhistory'];

  // Kiểm tra nếu trang hiện tại là một trong các noFooterRoutes hoặc là /orders/:id
  const shouldHideFooter = noFooterRoutes.includes(location.pathname) || /^\/orders\/\d+$/.test(location.pathname);

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/formcheckout" element={<CheckoutForm />} />
          <Route path="/orderhistory" element={<OrderHistory />} />
          <Route path="/orders/:id" element={<OrderDetail />} />
        </Routes>
      </main>
      {!shouldHideFooter && <Footer />}
    </>
  );
};

export default ClientRoutes;
