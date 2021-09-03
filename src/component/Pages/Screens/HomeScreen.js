import React, {  useEffect } from 'react';
import Items from '../Items';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import '../../PagesCSS/Home.css';
import {useDispatch, useSelector} from 'react-redux';
import { listProducts } from '../../Redux/ProductAction';

function HomeScreen() {
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(false)
     const dispatch = useDispatch();
    const productList = useSelector((state)=>state.productList);
    console.log(productList)
    const {loading, error, products }= productList;

    useEffect(() => {
        dispatch(listProducts());
        // const fecthData = async () => {
        //     try {
        //         setLoading(true)
        //         const { data } = await axios.get('/api/products')
        //         setProducts(data)
        //         setLoading(false)
        //     } catch (err) {
        //         setError(err.message);
        //         setLoading(false);
        //     }
        // }
        // fecthData()
    }, [dispatch])
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
