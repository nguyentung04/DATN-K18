import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Client/Home/Home';
import Products from '../pages/Client/Products/Products';
import About from '../pages/Client/About/About';
import Contact from '../pages/Client/Contact/Contact';
import SignIn from '../pages/auth/Login/SignIn';
import SignUp from '../pages/auth/Register/SignUp';
import ProductDetails from '../pages/Client/ProductDetails/ProductDetails';
import Cart from '../pages/Client/Cart/Cart';
import CheckoutForm from '../pages/Client/CheckoutForm/CheckoutForm';
import OrderHistory from '../pages/Client/OrderHistory/OrderHistory';
import OrderDetail from '../pages/Client/OrderDetail/OrderDetail';
import ClientLayout from '../layout/Clientlayout';

const ClientRoutes = () => {
  return (
    <Routes>
      <Route element={<ClientLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/formcheckout" element={<CheckoutForm />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/orders/:id" element={<OrderDetail />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default ClientRoutes;
