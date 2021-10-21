import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Register } from '../../Redux/UserAction';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';

function RegisterScreen(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPass, setConfirmPass]= useState('')

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error } = userRegister;
    const dispatch=useDispatch();
    
    const SubmitHandler=(e)=>{
        e.preventDefault();
        if(password === ConfirmPass){
            dispatch(Register(name, email, password ))
        }else{
            alert("Password don't match...")
        }
    }

    return (
        <div>
            <form className="form"  onSubmit={SubmitHandler} >
                <div>
                    <h1>New User Registeration</h1>
                    <div >
                        {loading && <LoadingBox />}
                        {error && <MessageBox>{error}</MessageBox>  }
                        <div >
                            <label htmlFor="name">Name</label>
                            <input 
                            style={{width:300}}
                             type="name"
                             id="name"
                             placeholder="Enter Name"
                             required
                             onChange={(e)=> setName(e.target.value)}
                             ></input>
                        </div>
                        <div>
                            <label  htmlFor="email">Email Address</label>
                            <input 
                            style={{width:300}}
                             type="email"
                             id="email"
                             placeholder="Enter Email"
                             required
                             onChange={(e)=>setEmail(e.target.value)}
                             ></input>
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input 
                            style={{width:300}}
                             type="password"
                             id="password"
                             placeholder="Enter Password"
                             onChange={(e)=>setPassword(e.target.value)}
                             ></input>
                        </div>
                        <div>
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                            style={{width:300}}
                             type="password"
                             id="confirmPass"
                             placeholder="Confirm Password"
                             onChange={(e)=>setConfirmPass(e.target.value)}
                             ></input>
                        </div>
                        <div>
                             <label style={{paddingTop:10}} />
                             <button  style={{width:300}} className="primary" type="submit">Register</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default RegisterScreen;
