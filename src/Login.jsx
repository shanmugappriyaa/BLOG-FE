import React from 'react'
import {  useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate();
    function handleLogin(){
        navigate('/createBlog');
    }
  return (
    <div className='d-flex row '>
        <div className='d-flex justify-content-center m-4'>
            <h4> Login </h4>   
        </div>
        <div className='d-flex row-8  justify-content-center'>
            <form>
                <div className='d-flex row'>
                <label className='form-label'>User Name</label>
                <input  type='text' placeholder='user name'/>
                <label className='form-label'>Password</label>
                <input  type='text' placeholder='Password'/>
                </div>
              
                <button className='btn btn-primary m-4' onClick={handleLogin}> sign-in</button>
            </form>
</div>
    </div>
  )
}

export default Login