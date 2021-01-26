import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { selectCategory, reset } from '../store/products-reducer';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const mapDispatchToProps = { selectCategory, reset };

function Products(props) {
    console.log('Props on Products: ', 'Active Category ', props.activeCategory, 'Products: ', props.products);

    const classes = useStyles();

    return (
        <div id="productDetail">
            {props.products.map((product) => (
                (product.category !== props.activeCategory) ? '' :
                    <CardActionArea>
                        <CardContent>
                            <Typography variant="h5" component="h2">
                                {product.itemName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {product.Description}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Only ${product.Price}!
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" color="primary">
                                Add to Cart
                            </Button>
                            <Button size="small" color="primary">
                                Buy!
                            </Button>
                        </CardActions>
                    </CardActionArea>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    state, 
    activeCategory: state.products.activeCategory,
    products: state.products.products
})


export default connect(mapStateToProps, mapDispatchToProps)(Products);