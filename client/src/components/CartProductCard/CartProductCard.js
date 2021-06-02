import React from 'react';
import useStyles from './styles';
import { Card, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from '@material-ui/core';
import { AddBoxOutlined, DeleteOutlined, IndeterminateCheckBoxOutlined } from '@material-ui/icons';
import convertToRupiah from '../../utils/convertToRupiah';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProductToCart, decrementProductCart, removeProductFromCart } from '../../redux/actions/carts';

function CartProductCard({ product }) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const handlePlus = () => {
        dispatch(addProductToCart(product));
    }
    
    const handleMinus = () => {
        dispatch(decrementProductCart(product));
    }
    
    const handleRemove = () => {
        dispatch(removeProductFromCart(product));
    }

    return (
        <Card className={classes.card} elevation={0}>
            <Grid container>
                <Grid item md={3}>
                    <Link to={`/detail/${product.productId}`}>
                        <CardMedia
                            image={product.image}
                            title={product.title}
                            className={classes.cardMedia}
                        />
                    </Link>
                </Grid>
                <Grid item md={9}>
                    <CardContent>
                        <Link to={`/detail/${product.productId}`} className={classes.title}>
                            <Typography variant="subtitle1">{product.title}</Typography>
                        </Link>
                        <Typography variant="subtitle2" className={classes.price}>{convertToRupiah(product.price)}</Typography>
                        <div className={classes.bottomCard}>
                            <Typography variant="caption">{product.category}</Typography>
                            <div className={classes.bottomRightCard}>
                                <IconButton onClick={handleMinus}>
                                    <IndeterminateCheckBoxOutlined />
                                </IconButton>
                                <p className={classes.qty}>{product.productQty}</p>
                                <IconButton onClick={handlePlus}>
                                    <AddBoxOutlined />
                                </IconButton>
                                <Divider orientation="vertical" flexItem className={classes.divider} />
                                <IconButton onClick={handleRemove}>
                                    <DeleteOutlined />
                                </IconButton>
                            </div>
                        </div>
                    </CardContent>
                </Grid>
            </Grid>
        </Card>
    )
}

export default CartProductCard
