import React from 'react';
import ProductComp from './ProductComponents';
import { connect } from 'react-redux';
import { selectCategory, reset } from '../store/products-reducer';
import { Typography } from '@material-ui/core';

const mapDispatchToProps = { selectCategory, reset };

function Categories(props) {

    const showCategory = (category) => {
        console.log('Show Category', category);
        props.selectCategory(category);
    }

    const reset = () => {
        props.rest();
    }

    console.log('CATEGORIES Active: ', props.active, 'Categories: ', props.categories);


    return (
        <div>
            <section id='categories'>
                <Typography variant='h4'>Browse Our Categories</Typography>
                <Typography variant='h7' id='Electronics' onClick={reset}>Home</Typography>
                {(props.active === 'Electronics' || props.active === '') ?
                    <div>
                        <Typography variant='h6' id='Electronics' onClick={() => showCategory('Electronics')}>Electronics</Typography>
                    </div> : ''
                }
                {(props.active === 'Food' || props.active === '') ?
                    <div>
                        <Typography variant='h6' id='Food' onClick={() => showCategory('Food')}>Food></Typography>
                    </div> : ''
                }
            </section>
            <section id="products">
                <Products />

            </section>
        </div>
    )
}

const mapStateToProps = state => ({
    categories: state.categories.categories,
    active: state.categories.activeCategory
})

export default connect(mapStateToProps, mapDispatchToProps)(Categories);