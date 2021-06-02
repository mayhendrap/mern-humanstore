import React, { useEffect } from 'react';
import { Container, Grid, Typography } from '@material-ui/core';
import { getProducts } from '../../redux/actions/products';
import { useDispatch, useSelector } from 'react-redux';
import HomeProductCard from '../../components/HomeProductCard/HomeProductCard';

const Home = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <Container>
            <Grid container spacing={6} style={{ marginTop: "2rem" }}>
                {
                    products?.length > 0 ? products.map((product) => {
                        return (
                            <Grid item xs={12} sm={4} md={3} key={product._id}>
                                <HomeProductCard data={product} />
                            </Grid>
                        )
                    }) : (
                    <Container>
                        <Typography style={{ marginTop: "3rem"}}>
                            Loading...
                        </Typography>
                    </Container>
                )}
            </Grid>
        </Container>
    )
};

export default Home;
