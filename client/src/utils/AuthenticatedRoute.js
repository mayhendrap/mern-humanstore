import React from 'react';
import { Redirect, Route } from 'react-router';

const AuthenticatedRoute = ({ component: Component, ...rest }) => {
    const user = JSON.parse(localStorage.getItem("profile"));
    return (
        <Route
            {...rest}
            render={props => {
                if (user === null) {
                    return <Redirect to="/auth" />
                } else {
                    return <Component {...props}/>
                }
            }}
        />
    );
};

export default AuthenticatedRoute;