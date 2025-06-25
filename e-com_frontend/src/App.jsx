import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/Searchbar'
import Home from './pages/Home.jsx';
// import { Collection } from './pages/Collection';
// import { Cart } from './pages/Cart';
import About from './pages/About';
// import { Contact } from './pages/Contact';
// import { Privacy } from './pages/Privacy';
// import { Terms } from './pages/Terms';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';

export default function App() {
  return <BrowserRouter>
        <div className="d-flex flex-column min-vh-100 bg-hogwarts px-3 px-sm-3 px-md-4 px-lg-5">
          <NavBar />
          <SearchBar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/collections" element={<Collection />} /> */}
              {/* <Route path="/cart" element={<Cart />} /> */}
              <Route path="/about" element={<About />} />
              {/* <Route path="/contact" element={<Contact />} /> */}
              {/* <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>;
}