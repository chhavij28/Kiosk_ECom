import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/Searchbar'
import Home from './pages/Home.jsx';
import Collections from './pages/Collections';
import Product from './pages/Product'
import Cart from './pages/Cart';
import About from './pages/About';
import Checkout from './pages/Checkout';
import Confirmation from './pages/Confirmation';
import Login from './pages/Login';
import Admin from './pages/Admin';
import AdminView from './pages/AdminView';
import AdminAdd from './pages/AdminAdd';
import AdminEdit from './pages/AdminEdit';
import AdminDelete from './pages/AdminDelete';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import CartContextProvider from './context/CartContext.jsx'

export default function App() {
  return <BrowserRouter>
        <CartContextProvider>
        <div className="d-flex flex-column min-vh-100 bg-hogwarts px-3 px-sm-3 px-md-4 px-lg-5">
          <NavBar />
          {/* <SearchBar /> */}
          <main className="flex-grow-1 justify-content-center">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<Collections />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/confirm" element={<Confirmation />} />
              <Route path="/login" element={<Login />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/view" element={<AdminView />} />
              <Route path="/add" element={<AdminAdd />} />
              <Route path="/edit" element={<AdminEdit />} />
              <Route path="/delete" element={<AdminDelete />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
        </CartContextProvider>
      </BrowserRouter>;
}