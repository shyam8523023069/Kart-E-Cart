import React from 'react'
import '../../index.css';
import {BrowserRouter,  Link,  Route} from 'react-router-dom';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import CartScreen from './Screens/CartScreen';
import {useDispatch, useSelector } from 'react-redux';
import SigninScreen from './Screens/SignInScreen';
import { signout } from '../Redux/UserAction';

function Home() {
    const cart = useSelector((state)=>state.cart);
   
    const{cartItems}= cart;
    
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    // console.log(JSON.stringify(userInfo)+"data after home page........")
    const dispatch = useDispatch();
    const signoutHandler = () => {
      dispatch(signout());
    };
    return (
        <BrowserRouter>
        <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="/">karty-e-cart</Link>
                </div>
                <div>
                    <Link to="/cart">Cart
                    { cartItems.length > 0 && <span className="badge">
                                {cartItems.length}
                            </span>
                       
                    
                    }
                    </Link>

                    {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )}
                    
                </div>
            </header>
            <main>
                <div>
                    <Route exact path = "/" component={HomeScreen} />
                    <Route path = "/product/:id" component = {ProductScreen} />
                    <Route path = "/cart/:id?" component ={CartScreen} />
                    <Route path = "/signin" component={SigninScreen} />
                </div>
            </main>
            <footer className="row center">All right reserved</footer>
        </div>
        </BrowserRouter>
    )
}

export default Home;
