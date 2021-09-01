import React from 'react'
import '../../index.css';
import data from '../Data/data';
import Items from './Items';

function Home() {
    return (
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
                    <div className="row center">
                        {
                            data.products.map((product) => (
                                <Items key = {product._id} product = {product} />
                       
                            ))
                        }
                    </div>
                </div>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
    )
}

export default Home;
