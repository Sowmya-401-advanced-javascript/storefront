let initialState = {
    cart: [],
    cartCount: 0
  }
  
  export const addItem = (product) => {
    // console.log('CART REDUCER in addItem ', product);
    return {
      type: 'ADDITEM',
      payload: product
    }
  }

//   TODO: Change Quantity
  
  export const removeItem = (product) =>{
    // console.log('CART REDUCER removeItem: ', product);
    return {
      type: 'REMOVE',
      payload: product
    }
  }
  
  export const clearCart = () => {
    return {
      type: 'RESET',
    }
  }
  
  const cartBoard = (state=initialState, action) => {
    let { type, payload } = action;
    switch (type) {
      case 'ADDITEM':
        // console.log('Payload in cart-reducer', payload);
        return {...state, cart: [...state.cart, payload], cartCount: state.cartCount + 1};
        
        case 'REMOVE':
          // console.log('REMOVING ITEM IN CART in CART REDUCER BOARD');
          
        // Remove from the state
          let tempArray = state.cart; 
          // console.log('tempArray before delete ', tempArray);
          let location;
          tempArray.map((product, idx) => {
            if(product.name === payload.name){
              return location=idx;
            }
            return location;
          })
          // console.log({location});
          
          tempArray.splice(location,1);
          // console.log('tempArray after delete ', tempArray);
          
          return {...state, cart: tempArray, cartCount: state.cartCount -1}; 
  
        case 'RESET':
          return initialState;
        
        default:
          return state;
    }
  }
  
  export default cartBoard;