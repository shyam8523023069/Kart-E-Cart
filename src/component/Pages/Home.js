import React from 'react'
import '../../index.css';
import Img1 from '../Images/p1.jpg';
import data from '../Data/data';

function Home() {
    return (
        <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">karty-e-cart</a>
                </div>
                <div>
                    <a href="cart.html">Cart</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </header>
            <main>
                <div>
                    <div className="row center">
                        {
                            data.products.map((product) => {

                        <div className="card">
                            <a href="product.html">
                                {/* <!-- image size: 680px by 830px --> */}
                                <img className="medium" src={Img1} alt="product" />
                            </a>
                            <div className="card-body">
                                <a href="product.html">
                                    <h2>{product.name}</h2>
                                </a>
                                <div className="rating">
                                    <span> <i className="fa fa-star"></i> </span>
                                    <span> <i className="fa fa-star"></i> </span>
                                    <span> <i className="fa fa-star"></i> </span>
                                    <span> <i className="fa fa-star"></i> </span>
                                    <span> <i className="fa fa-star"></i> </span>
                                </div>
                                <div className="price">$120</div>
                            </div>
                        </div>
                            })
                        }
                    </div>
                </div>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
    )
}

export default Home;
