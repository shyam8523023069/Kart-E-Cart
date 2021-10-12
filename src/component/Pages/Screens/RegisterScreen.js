import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';

function RegisterScreen() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [ConfirmPass, setConfirmPass]= useState('')
    const dispatch=useDispatch();
    const submitHandler=(e)=>{
        e.preventDefault();
        dispatch(register(Name, Email, Password, ConfirmPass))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <h1>New User Registeration</h1>
                    <div>
                        {/* {loading && <LoadingBox />} */}
                        {/* {error && <MessageBox variant="danger">{error}</MessageBox>  } */}
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
                             type="confirmPass"
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
