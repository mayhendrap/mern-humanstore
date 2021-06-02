import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
import DetailProduct from './containers/DetailProduct/DetailProduct';
import Cart from './containers/Cart/Cart';
import Auth from './containers/Auth/Auth';
import AuthenticatedRoute from './utils/AuthenticatedRoute';
import UnauthenticatedRoute from './utils/UnauthenticatedRoute';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/detail/:id" component={DetailProduct} exact/>
                <AuthenticatedRoute path="/cart" component={Cart} exact/>
                <UnauthenticatedRoute path="/auth" component={Auth} exact/>
            </Switch>
        </Router>
    )
}

export default App
