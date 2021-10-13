import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Register } from '../../Redux/UserAction';
import LoadingBox from '../LoadingBox';
import MessageBox from '../MessageBox';

function RegisterScreen(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [ConfirmPass, setConfirmPass]= useState('')

    const redirect1 = props.location.search
    ? props.location.search.split('=')[1]
    : '/signin';
    console.log(JSON.stringify(props)+'props===========reg')

    const userRegister = useSelector((state) => state.userRegister);
    const { userDetails, loading, error } = userRegister;
    console.log(JSON.stringify(userDetails)+'===========data reg screen');
    const dispatch=useDispatch();
    
    const SubmitHandler=(e)=>{
        e.preventDefault();
        if(password === ConfirmPass){
            dispatch(Register(name, email, password ))
        }else{
            alert("Password don't match...")
        }
    }
    useEffect(() => {
        if (userDetails) {
          props.history.push(redirect1);
        }
      }, [props.history, redirect1, userDetails]);
    

    return (
        <div>
            <form onSubmit={SubmitHandler} >
                <div>
                    <h1>New User Registeration</h1>
                    <div >
                        {loading && <LoadingBox />}
                        {error && <MessageBox style={{color: "red"}}>{error}</MessageBox>  }
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
                             id="confirmPass"
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
