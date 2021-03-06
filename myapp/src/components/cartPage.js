import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { removeItem, clearCart, addItem } from '../store/cartReducer';
import {incrementStock, decrementStock} from '../store/products-reducer'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const mapDispatchToProps = { removeItem, clearCart, incrementStock, addItem, decrementStock };

function CartPage (props) {
    const classes = useStyles();

  console.log('SIMPLE CART props.state ', props.state);
  console.log('SIMPLE CART props.products ', props.products);

  const removeFromCart = (product) => {
    console.log('CART PAGE removeFromCart product: ', product);
    props.removeItem(product);
    props.incrementStock(product);
}

const addToCart = (product) => {
    console.log('Adding to cart: ', product);
    props.decrementStock(product);
    props.addItem(product);
}

  console.log('Products ', props.products);
  
  return (
    <section>
    
    <div id="productDetail">
      { props.products.map((product, idx) => (
      <section key={idx}>
        <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            title={product.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {product.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Only ${product.price}!
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {product.inStock} Currently in stock!
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button id={idx+'button'} size="small" color="primary"  onClick={()=>addToCart(product)}>
            +
          </Button>
          <Button id={idx+'button2'} size="small" color="primary" onClick={()=>removeFromCart(product)}>
            -
          </Button>
        </CardActions>
        </Card>
      </section>
      ))}
    </div>
    </section>
  )
}

const mapStateToProps = state => ({
  state,
  products: state.cart.cart,
  count: state.cartCount,
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);