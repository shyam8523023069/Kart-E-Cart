import React, { useState, useEffect } from 'react'
import Items from '../Items';
import axios from 'axios';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import '../../PagesCSS/Home.css';

function HomeScreen() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false)
    useEffect(() => {
        const fecthData = async () => {
            try {
                setLoading(true)
                const { data } = await axios.get('/api/products')
                setProducts(data)
                setLoading(false)
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }
        fecthData()
    }, [])
    return (
        <div>
            {
                loading ? (<LoadingBox></LoadingBox>)
                    : error ? (<MessageBox variant="danger" >{error}</MessageBox>)
                        : (<div className="row center">
                            {
                                products.map((product) => (
                                    <Items key={product._id} product={product} />

                                ))
                            }
                        </div>

                        )
            }
        </div>
    )
}

export default HomeScreen;
