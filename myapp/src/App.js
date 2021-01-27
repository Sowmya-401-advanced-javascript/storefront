import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/categories';
import Products from './components/ProductComponents';


function App() {
  return (
    <div>
      <Header />
      <Categories />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
