import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Categories from './components/categories';
// import Products from './components/ProductComponents';
import SimpleCart from './components/simpleCart';
import CartPage from './components/cartPage';
import { BrowserRouter, Route} from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Route exact path="/">
          <SimpleCart />
          <Categories />
        </Route>
        <Route exact path="/store">
          <CartPage />
        </Route>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
