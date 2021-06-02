import React, { useEffect } from 'react';
import useStyles from './styles';
import { Container, Breadcrumbs, Typography, Grid, CardMedia, CardContent, Button } from '@material-ui/core';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSingleProduct } from '../../redux/actions/products';
import convertToRupiah from '../../utils/convertToRupiah';
import { addProductToCart } from '../../redux/actions/carts';

const DetailProduct = () => {
    const classes = useStyles();
    const user = JSON.parse(localStorage.getItem("profile"));
    const { id } = useParams();
    const dispatch = useDispatch();

    const product = useSelector(state => state?.products?.detailProduct);

    const addToCart =  () => {
        const {_id, ...restProduct} = product;
        dispatch(addProductToCart({...restProduct, productId: _id, userId: user.result._id, productQty: 1, totalPrice: product.price}));
    }

    useEffect(() => {
        dispatch(getSingleProduct(id));
    }, [dispatch]);

    if (product) {
        return (
            <Container className={classes.wrapper}>
                <Breadcrumbs className={classes.breadcrumbs}>
                    <Link to="/" className={classes.breadcrumbsLink}>
                        <Typography variant="body2">
                            Beranda
                        </Typography>
                    </Link>
                    <Typography variant="body2">
                        {product.title}
                    </Typography>
                </Breadcrumbs>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <CardMedia component="img" title={product.title} image={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.title} className={classes.cardMedia}/>
                    </Grid>
                    <Grid item md={4}>
                        <CardContent className={classes.cardContent}>
                            <Typography variant="caption" className={classes.category}>
                                {product.category}
                            </Typography>
                            <Typography gutterBottom variant="h4" className={classes.title}>
                                {product.title}
                            </Typography>
                            <Typography gutterBottom variant="body1">
                                {convertToRupiah(product.price)}
                            </Typography>
                            <Typography gutterBottom variant="body2" className={classes.desc}>
                                {product.desc}
                            </Typography>
                            {
                                user ?
                                    <Button variant="contained" disableElevation className={classes.button} onClick={addToCart}>+ Keranjang</Button>
                                :
                                    <Link to="/auth" className={classes.loginLink}>
                                        <Button variant="contained" disableElevation className={classes.button}>Masuk</Button>
                                    </Link>
                            }
                        </CardContent>
                    </Grid>
                </Grid>
            </Container>
        )
    } else {
        return (
            <Container style={{ marginTop: "3rem"}}>
                <Typography>Loading...</Typography>
            </Container>
        )
    }
};

export default DetailProduct;
