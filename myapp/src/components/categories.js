import React from 'react';
import Products from './ProductComponents';
import { connect } from 'react-redux';
import { selectCategory, updateProducts, reset } from '../store/products-reducer';
import { Typography } from '@material-ui/core';

const mapDispatchToProps = { selectCategory, updateProducts, reset };

function Categories(props) {

    const showCategory = (category) => {
        console.log('Show Category', category);
        props.selectCategory(category);
        props.updateProducts(category);
    }

    const reset = () => {
        props.reset();
    }

    console.log('CATEGORIES Active: ', props.active, 'Categories: ', props.categories);


    return (
        <div>
            <section id='categories'>
                <Typography variant='h4'>Browse Our Categories</Typography>
                <Typography variant='h6' id='Electronics' onClick={reset}>Home</Typography>
                {(props.active === 'Electronics' || props.active === '') ?
                    <div>
                        <Typography variant='h6' id='Electronics' onClick={() => showCategory('Electronics')}>Electronics</Typography>
                    </div> : ''
                }
                {(props.active === 'Clothing' || props.active === '') ?
                    <div>
                        <Typography variant='h6' id='Clothing' onClick={() => showCategory('Clothing')}>Clothing</Typography>
                    </div> : ''
                }
                  {(props.active === 'Food' || props.active === '') ?
                    <div>
                        <Typography variant='h6' id='Food' onClick={() => showCategory('Food')}>Food</Typography>
                    </div> : ''
                }
            </section>
            <section id="Products">
                <Products />

            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.products.categories,
    active: state.products.activeCategory,
    categories: state.products.categories
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);