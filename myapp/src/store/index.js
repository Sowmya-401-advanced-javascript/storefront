import { createStore, combineReducers } from 'redux';

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from 'redux-devtools-extension';

import cart from './cartReducer';
import products from './products-reducer';

// combine our reducers - right now it isn't necessary, however, you usually will have more than one and it will be.
let reducers = combineReducers({ products, cart });

// finally, we get to actually create the store
const store = () => {
    return createStore(reducers, composeWithDevTools());
}

export default store();
