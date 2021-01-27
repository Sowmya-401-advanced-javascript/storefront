let initialState = {
    categories: [
      { itemName: 'electronics', displayName: 'Elecronics' },
      { itemName: 'food', displayName: 'Food' },
      { itemName: 'clothing', displayName: 'Clothing' },
    ],
    products: [
      { itemName: 'TV', Category: 'Electronics', Price: 699.00, inStock: 5 },
      { itemName: 'Radio', Category: 'Electronics', Price: 99.00, inStock: 15 },
      { itemName: 'Shirt', Category: 'Clothing', Price: 9.00, inStock: 25 },
      { itemName: 'Socks', Category: 'Clothing', Price: 12.00, inStock: 10 },
      { itemName: 'Apples', Category: 'Food', Price: .99, inStock: 500 },
      { itemName: 'Eggs', Category: 'Food', Price: 1.99, inStock: 12 },
      { itemName: 'Bread', Category: 'Food', Price: 2.39, inStock: 90 },
    ],
    activeCategory: ''
};

export const selectCategory = (category) => {
    return {
        type: 'SELECTCATEGORY',
        payload: category
    }
}

// export const updateProducts = (category) => {
//     return {
//         type: 'UPDATEPRODUCTS',
//         payload: category
//     }
// }

export const reset = () => {
    return {
        type: 'RESET'
    }
}

const categoryReducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case 'SELECTCATEGORY':
            console.log('Type_________', type);
            console.log('CATEGORY REDUCER', initialState);
            console.log('Payload', payload);
            return{...state, activeCategory: payload};

        case 'UPDATEPRODUCTS':
            let updatedProducts = state.products.map(product => {
                if(product.category === payload){
                    
                    return{...state.updatedProducts, activeCategory: payload};       //return product         
                    
                }
            });
            //return updated products ...state, state.updatedProducts

        case 'RESET':
            return initialState;

        default:
            return state;
    }
}

export default categoryReducer;
