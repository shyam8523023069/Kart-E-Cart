import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

function Items(props) {
    const {product} = props
    return (
        <div key={product._id} className="card">
        <Link to={`/product/${product._id}`}>
            <img className="medium" src={product.image} alt="product" />
        </Link>
        <div className="card-body">
            <Link to="product.html">
                <h2>{product.name}</h2>
            </Link>
                <Rating rating = {product.rating}
                        numReviews ={product.numReviews} />
            <div className="price">&#8377; {product.price}</div>
        </div>
    </div>
    )
}

export default Items;
