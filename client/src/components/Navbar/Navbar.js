import React, { useEffect, useState } from 'react';
import useStyles from './styles'

import { AppBar, Container, Typography, Toolbar, Button, Avatar, Menu, MenuItem, Divider, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import decode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { ShoppingBasketOutlined } from '@material-ui/icons';

const Navbar = () => {
    const classes = useStyles();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const { productsQty } = useSelector(state => state.carts);
    const history = useHistory();
    const location = useLocation();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const logout = () => {
        handleClose()
        dispatch({ type: 'LOGOUT' });
        history.push('/auth');
        setUser(null);
    };

    useEffect(() => {
        const token = user?.token;
        if (token) {
            const decodedToken = decode(token);
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
        }
        setUser(JSON.parse(localStorage.getItem("profile")));
    }, [location]);

    return (
        <>
        <AppBar elevation={0} position="fixed" className={classes.appBar}>
            <Toolbar>
                <Container className={classes.wrapperHeader}>
                    <Link to="/" className={classes.storeName}>
                        <Typography variant="h6">
                            Humanstore
                        </Typography>
                    </Link>
                    <div className={classes.rightHeader}>
                        {
                            user ? (
                                <div className={classes.profile}>
                                    <Link to="/cart" className={classes.cartWrapper}>
                                        <IconButton className={classes.cartLogo}>
                                            <ShoppingBasketOutlined />
                                        </IconButton>
                                        <Typography variant="caption" className={classes.countCart}>{ productsQty }</Typography>
                                    </Link>
                                    <Divider orientation="vertical" flexItem />
                                    <Typography className={classes.userName} variant="h6">
                                        {user.result.name}
                                    </Typography>
                                    <Avatar
                                        className={classes.avatar}
                                        alt={user.result.name}
                                        src={user.result.image}
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleClick}
                                    >
                                        {user.result.name.charAt(0)}
                                    </Avatar>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        keepMounted
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        className={classes.menuDropdown}
                                        elevation={1}
                                    >
                                        <MenuItem onClick={logout}>Logout</MenuItem>
                                    </Menu>
                                </div>
                            ) : (
                                <Link to={`/auth`} className={classes.auth}>
                                    <Button variant="outlined" size="medium">
                                        Masuk
                                    </Button>
                                </Link>
                            )
                        }
                    </div>
                </Container>
            </Toolbar>
        </AppBar>
        <Toolbar />
        </>
    )
};

export default Navbar;
