const initialState = {
    products: [
        {
            _id: '1',
            itemName: 'Samsung TV',
            Description: 'Samsung TV 75inch',
            Price: '400',
            Category: 'Electronics',
            itemCount: 0
        },

        {
            _id: '2',
            itemName: 'Oneplus',
            Description: 'Oneplus7t',
            Price: '600',
            Category: 'Electronics',
            itemCount: 0
        },

        {
            _id: '3',
            itemName: 'Amazon Echo Show',
            Description: 'AmazonEcho Show 15inch',
            Price: '200',
            Category: 'Electronics',
            itemCount: 0
        },

        {
            _id: '4',
            itemName: 'Mac',
            Description: 'Apple',
            Price: '1000',
            Category: 'Electronics',
            itemCount: 0
        },

        {
            _id: '5',
            itemName: 'Hot Chocolate',
            Description: 'Add on Ice-Cream',
            Price: '15',
            Category: 'Food',
            itemCount: 0
        },

        {
            _id: '6',
            itemName: 'Chocolate Fudge',
            Description: 'Eat with Ice-Cream',
            Price: '20',
            Category: 'Food',
            itemCount: 0
        },

        {
            _id: '7',
            itemName: 'Choco Chips',
            Description: 'Toppings on Ice-cream',
            Price: '10',
            Category: 'Food',
            itemCount: 0
        },

        {
            _id: '8',
            itemName: 'Chocolate Syrup',
            Description: 'Add in Milkshakes and Ice-Cream',
            Price: '20',
            Category: 'Food',
            itemCount: 0
        }

    ],
    activeCategory: ''
};

export const selectCategory = (category) => {
    return {
        type: 'SELECTCATEGORY',
        payload: category
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

const categoryReducer = (state=initialState, action) => {
    let { type, payload } = action;
    switch(type) {
        case 'SELECTCATEGORY':
            console.log('CATEGORY REDUCER', initialState);

            return{...state, activeCategory: payload};

            case 'RESET':
                return initialState;

                default:
                    return state;
    }
}

export default categoryReducer;
