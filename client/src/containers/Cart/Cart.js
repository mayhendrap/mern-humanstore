import React from 'react';
import { Button, Card, Container, Divider, Grid, Typography } from '@material-ui/core';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import convertToRupiah from '../../utils/convertToRupiah';
import CartProductCard from '../../components/CartProductCard/CartProductCard';

const Cart = () => {
    const classes = useStyles();
    const { products, productsQty, totalPriceProducts } = useSelector(state => state.carts);

    return (
        <Container className={classes.cartWrapper}>
            <Grid container spacing={3}>
                <Grid item sm={12} md={8}>
                    <Typography variant="h6">
                        Keranjang
                    </Typography>
                    <Divider />
                    {
                        products.length > 0 ? products.map((product) => {
                            return (
                                <CartProductCard key={product.productId} product={product} />
                            )
                        }
                        ) : (
                            <Typography className={classes.emptyCart}>Belum ada pesanan di keranjang</Typography>
                        )
                    }
                </Grid>
                <Grid item sm={12} md={4}>
                    <Card elevation={0} className={classes.card}>
                        <Typography variant="h6" className={classes.cardHeaderText}>
                            Ringkasan belanja
                        </Typography>
                        <Grid container className={classes.totalPriceBetween}>
                            <Grid item>
                                <Typography variant="body2">
                                    Total Harga ({productsQty} barang)
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body2">
                                    {convertToRupiah(totalPriceProducts)}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Divider variant="middle" className={classes.divider}/>
                        <Grid container className={classes.totalPriceBetween}>
                            <Grid item>
                                <Typography variant="h6" className={classes.totalPrice}>
                                    Total Harga ({productsQty} barang)
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="h6" className={classes.totalPrice}>
                                    {convertToRupiah(totalPriceProducts)}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Button variant="contained" disableElevation className={classes.button}>
                            Beli({productsQty})
                        </Button>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
};

export default Cart;
