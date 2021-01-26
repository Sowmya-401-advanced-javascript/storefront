export const productListReducer = (name) => {
    return{
        type: 'SHOWLIST',
        payload: category
    }
}

// export a function that has two parameters, state and action
// action has both type and payload in it
// switch statement to determijne what the type is
// the default return is state

export default (state=initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'SHOWLIST':
            let products = state.products.map(product => {
                if(product.category === payload){
                    return {name: product.name, Categories: product.category}
                }
            })
    }
}