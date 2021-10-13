import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Register } from '../../Redux/UserAction';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';
import {Link} from 'react-router-dom'

function RegisterScreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPass, setConfirmPass]= useState('')

    const userRegister = useSelector((state) => state.userRegister);
    const { userDetails, loading, error } = userRegister;
    // console.log(JSON.stringify(userDetails)+'==============data comming from register')
    const dispatch=useDispatch();
    
    const submitHandler=(e)=>{
        e.preventDefault();
        if(password === ConfirmPass){
            dispatch(Register(name, email, password ))
            // call signin
        }else{
            alert("Password don't match...")
        }
    }

    return (
        <div>
            <form onSubmit={submitHandler} >
                <div>
                    <h1>New User Registeration</h1>
                    <div>
                        {loading && <LoadingBox />}
                        {/* {userDetails && <MessageBox variant="success">{userDetails.data.message}</MessageBox>  } */}
                        {error && <MessageBox variant="danger">{error}</MessageBox>  }
                        <div>
                            <label>Name</label>
                            <input 
                             type="name"
                             id="name"
                             placeholder="Enter Name"
                             required
                             onChange={(e)=> setName(e.target.value)}
                             ></input>
                        </div>
                        <div>
                            <lable htmlFor="email">Email Address</lable>
                            <input 
                             type="email"
                             id="email"
                             placeholder="Enter Email"
                             required
                             onChange={(e)=>setEmail(e.target.value)}
                             ></input>
                        </div>
                        <div>
                            <label>Password</label>
                            <input 
                             type="password"
                             id="password"
                             placeholder="Enter Password"
                             onChange={(e)=>setPassword(e.target.value)}
                             ></input>
                        </div>
                        <div>
                            <label>Confirm Password</label>
                            <input
                             type="password"
                             placeholder="Confirm Password"
                             onChange={(e)=>setConfirmPass(e.target.value)}
                             ></input>
                        </div>
                        <div>
                            <button className="primary" type="submit" >Register</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterScreen;
