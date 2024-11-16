import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './Components/Navigation/Navigation';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Products from './Components/Products/Products';
import Product from './Components/Product/Product';
import ProductDetails from './Components/ProductDetails/ProductDetails';
import Appoinment from './Components/Appoinment/Appoinment';

const App = () => {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/products' element={<Products/>} />
        <Route path='/product' element={<Product/>} />
        
        <Route path='/productDetlais/:id' element={<ProductDetails/>}/>
        <Route path='/appoinment/:id' element={<Appoinment/>}/>

      </Routes>
    </div>
  );
};

export default App;