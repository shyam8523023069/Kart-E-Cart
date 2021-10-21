import Axios from 'axios';
import {
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
} from './Const';

export const Register = (name, email, password)=> async (dispatch)=>{
  dispatch({ type:USER_REGISTER_REQUEST, payload : {name, email, password}});
  try{
    const data = await Axios.post('/api/users/register', {name, email, password});
    dispatch({type: USER_REGISTER_SUCCESS, payload:data});
    localStorage.setItem('userDetails', JSON.stringify(data))
    if(data && data.status === 200){
      console.log("data at axios",data)
      window.location.href = "/signin"
    }
  }catch(error){
    dispatch({type: USER_REGISTER_FAIL, payload:
      error.response && error.response.data.message
      ? error.response.data.message
      : error.message, })
  }
}

export const signin = (email, password) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password }  });
  try {
    const data  = await Axios.post('/api/users', { email, password });
  
     dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
       localStorage.setItem('userInfo', JSON.stringify(data));
     
  } catch (error) {
    if(error.response.status === 404){
      dispatch({
      type: USER_SIGNIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
    }
  }
};
export const signout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  dispatch({ type: USER_SIGNOUT });
};