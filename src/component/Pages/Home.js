import React from 'react'
import '../../index.css';
import {BrowserRouter,  Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

function Home() {
    return (
        <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="/">karty-e-cart</a>
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main>
                <div>
                    <Route exact path = "/" component={HomeScreen} />
                    <Route path = "/product/:id" component = {ProductScreen} />
                </div>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
        </BrowserRouter>
    )
}

export default Home;
