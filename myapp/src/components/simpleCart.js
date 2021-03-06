  import React from 'react';
  import { connect } from 'react-redux';
  import { removeItem, clearCart, addItem } from '../store/cartReducer';
  import { incrementStock, decrementStock } from '../store/products-reducer';

const mapDispatchToProps = { removeItem, clearCart, incrementStock };

function SimpleCart (props) {

  // console.log('SIMPLE CART props.state ', props.state);
  // console.log('SIMPLE CART props.products ', props.products);

  const removeItem = (product) => {
    // console.log('SIMPLE CART removeItem product: ', product);
    props.removeItem(product);
    props.incrementStock(product);
}
  
  return (
    <section id='simpleCart'>
      <div>
      { props.products.map((product, idx) => (
        <section key={idx}>
        <p>{product.name}</p>
        <button id={idx+'button'} onClick={()=>removeItem(product)}>X</button>
        </section>
      ))}
      </div>
    </section>
  )
}

const mapStateToProps = state => ({
  state,
  products: state.cart.cart,
  count: state.cartCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);