import React from 'react'
import '../../index.css';
import {BrowserRouter,  Link,  Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import { useSelector } from 'react-redux';

function Home() {
    const cart = useSelector((state)=>state.cart);
    const{cartItems}= cart;
    return (
        <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">karty-e-cart</Link>
                </div>
                <div>
                    <Link to="/cart">Cart
                    {cartItems.length > 0 && (
                        <span className="badge">
                            {cartItems.length}
                        </span>
                    )}
                    </Link>
                    <Link to="/signin">Sign In</Link>
                </div>
            </header>
            <main>
                <div>
                    <Route exact path = "/" component={HomeScreen} />
                    <Route path = "/product/:id" component = {ProductScreen} />
                    <Route path = "/cart/:id?" component ={CartScreen} />
                </div>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
        </BrowserRouter>
    )
}

export default Home;
