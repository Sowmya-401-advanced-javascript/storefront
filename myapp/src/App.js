import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductComp from './components/ProductComponents'
import initialState from './store/products';
import Categories from './components/categories';
import { Container } from '@material-ui/core';


function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Container>

        </Container>
        <ProductComp></ProductComp>
        <Categories></Categories>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
