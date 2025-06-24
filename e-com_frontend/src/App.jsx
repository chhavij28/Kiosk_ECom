import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SearchBar } from './components/Searchbar'
import { Home } from './pages/Home';
import { Collection } from './pages/Collection';
import { Cart } from './pages/Cart';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { DataProvider } from './utils/DataContext';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function App() {
  return <BrowserRouter>
      <DataProvider>
        <div className="flex flex-col min-h-screen bg-gray-50">
          <NavBar />
          <SearchBar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/collections" element={<Collection />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </DataProvider>
    </BrowserRouter>;
}