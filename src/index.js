import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductsWithCategories from './pages/ProductsWithCategories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
          <Route index element={<App/>} />
          <Route path='shop' element={<Shop/>} />
          <Route path='aboutus' element={<AboutUs/>} />
          <Route path="shop/category/:slug" element={<ProductsWithCategories />} />
          <Route path="shop/product/:id" element={<Product />} />
          <Route path='*' element={<NotFound/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

