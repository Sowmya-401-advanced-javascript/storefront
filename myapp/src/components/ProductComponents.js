// import React, { useEffect } from 'react';
import { Button /*CardMedia*/ } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { selectCategory, /*updateProducts,*/ reset } from '../store/products-reducer';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const mapDispatchToProps = { selectCategory, /*updateProducts,*/ reset };

function Products(props) {
    console.log('Props on Products: ', 'Active Category ', props.activeCategory, 'Products: ', props.products, 'State.......!', props.state.products);

    const classes = useStyles();

    return (
        <div id="productDetail">
            {props.products.map((product, idx) => (
                (product.category !== props.activeCategory) ? '' :
                    <section key={idx}>
                        {/* <card className={classes.root}> */}
                            {/* <CardActionArea> */}
                                {/* <CardMedia */}
                                    title={product.itemName}
                                {/* /> */}
                                {/* <CardContent> */}
                                    <Typography variant="h5" component="h2">
                                        {product.itemName}
                                    </Typography>
                                    {/* <Typography variant="body2" color="textSecondary" component="p">
                                        {product.Description}
                                    </Typography> */}
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        ${product.Price}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {product.inStock} In Stock!
                                    </Typography>
                                {/* </CardContent> */}
                                {/* <CardActions> */}
                                    <Button size="small" color="primary">
                                        Add to Cart
                                    </Button>
                                    <Button size="small" color="primary">
                                        Buy!
                                    </Button>
                                {/* </CardActions> */}
                            {/* </CardActionArea> */}
                        {/* </card> */}
                    </section>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    state,
    activeCategory: state.products.activeCategory,
    products: state.products.products,
    categories: state.products.categories
})


export default connect(mapStateToProps, mapDispatchToProps)(Products);