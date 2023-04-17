import React from 'react';
import {Routes, Route, Navigate } from 'react-router-dom';
import 'assets/scss/main.scss';

//pages
import AboutPage from 'pages/AboutPage';
import HomePage from 'pages/HomePage';
import ProductItemPage from 'pages/HomePage/ProductItem';
import NotFoundPage from 'pages/NotFoundPage';

// components
import {Header, Footer} from 'components';

const App = () => (
  <div className="ui-wrapper">
    <Header isLogo className="main-header"/>
    <div className="ui-content-wrapper">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<Navigate to="/" replace/>}/>
        <Route path="/products/:itemAlias" element={<ProductItemPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/404" element={<NotFoundPage/>}/>
        <Route path="*" element={<Navigate to="/404"/>}/>
      </Routes>
    </div>
    <Footer/>
  </div>
);

export default App;
