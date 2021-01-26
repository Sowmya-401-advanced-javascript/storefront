import React, { useState } from 'react';
import { connect } from 'react-redux';
import initialState from '../store/products';


const ProductComp = () => {

    const { products } = initialState;

    const [currentCategory, setCurrentCategory] = useState([]);

    const renderProducts = (e) => {
        let tempArray = [];
        const name = e.target.name;
        if(name === 'Electronics'){
            products.forEach(product => {
                // console.log("Product", product);
                if(product.Category === "Electronics"){
                    tempArray.push(product.itemName, product.Description, product.Price, product.itemCount)
                }
            })
        }
        if(name === 'Food'){
            products.forEach(product => {
                // console.log("Product", product);
                if(product.Category === "Food"){
                    tempArray.push(product.itemName, product.Description, product.Price, product.itemCount)
                }
            })
        }
        setCurrentCategory(tempArray);
    }

    return (
        <div>
            <button name="Electronics" onClick={renderProducts}>Electronics</button>
            <button name="Food" onClick={renderProducts}>Food</button>

            <h2>Browse Our Categories</h2>
            {currentCategory}
                
        </div >
    )
}

export default ProductComp;