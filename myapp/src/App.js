import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductComp from './components/ProductComponents'
import initialState from './store/products';
import Categories from './components/categories';
import { Container } from '@material-ui/core';


function App() {
  return (
    <div>
      <Header />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
