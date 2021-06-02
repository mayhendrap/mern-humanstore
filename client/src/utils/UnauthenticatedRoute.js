import React from 'react';
import { Redirect, Route } from 'react-router';

const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem("profile"));
    return (
        <Route
            {...rest}
            render={props => {
                if (user === null) {
                    return <Component {...props}/>
                } else {
                    return <Redirect to="/" />
                }
            }}
        />
    )
};

export default UnauthenticatedRoute;