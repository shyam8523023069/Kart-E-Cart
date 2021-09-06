import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import data from "../../Data/data";
import Rating from '../Rating';
import '../../PagesCSS/ProductScreen.css';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import {useSelector, useDispatch} from 'react-redux';
import {detailsProduct} from "../../Redux/ProductAction";
import {useEffect} from 'react';

function ProductScreen(props) {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const productId = props.match.params.id;
    const productDetails = useSelector((state)=> state.productDetails );
    const {loading, error, product}= productDetails;
    // const product = data.products.find((x) => x._id === props.match.params.id );
    // if(!product){
    //     return <div>Product Not Found</div>;
    // }
useEffect(()=>{
    dispatch(detailsProduct(productId));
},[dispatch, productId]);

const AddtoCartHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
}

    return (
        <div>
            {
            loading ? (<LoadingBox></LoadingBox>)
                    :error ? (
                        <MessageBox variant = "danger">{error}</MessageBox>
                    ) :(
                        <div>

            <Link to="/">HomePage</Link>
            <div className="row top">
              <div className="col-2" >
                <img className="large" src = {product.image} alt={product.name}></img>
              </div>
              <div className="col-1">
                <ul>
                    <li>
                        <h1>{product.name}</h1>
                    </li>
                    <li>
                        <Rating rating = {product.rating}
                        numReviews={product.numReviews} />
                    </li>
                    <li>Price : &#8377; {product.price} </li>
                    <li>Description : <p>{product.description}</p></li>
                </ul>
              </div>    
              <div className="col-1">
                <div className="card card-body">
                    <ul>
                        <li>
                            <div className="row" >
                                <div>Price</div>
                                <div className="price" >&#8377; {product.price} </div>
                            </div>
                        </li>
                        <li>
                            <div className="row" >
                                <div>Status</div>
                                <div>
                                    {
                                        product.countInStock > 0 ? (<span className="success">In Stock</span>)
                                                                : (<span className="error">Unavailable</span>)
                                    }
                                </div>
                            </div>
                        </li>
                        {
                            product.countInStock > 0 && (
                                <>
                                <li>
                                    <div className="row">
                                        <div>Qty</div>
                                        <div>
                                            <select value={qty}
                                                    onChange={(e)=>setQty(e.target.value)}>
                                                    {[...Array(product.countInStock).keys()].map(
                                                        (x) =>(
                                                            <option key={x + 1} value = {x+1}>
                                                                {x+1}
                                                            </option>
                                                        )
                                                    )}
                                            </select>
                                        </div>
                                    </div>
                                </li>
                        <li>
                            <button onClick = {AddtoCartHandler} className="primary block">Add to Cart</button>
                        </li>
                                </>
                            )
                        }
                    </ul>

                </div>
              </div>
            </div>        
           </div>
                    )}
        </div>
    )
}

export default ProductScreen
