import React from 'react'
import {  useNavigate } from 'react-router-dom'
function Home() {
    let navigate = useNavigate();
  return (
    <div className='d-flex '>
        <div  className='col-6 text-align-center'>Shanmu-Blog</div>
        <button onClick={()=> navigate('/login')} className='col-3 m-2'> Login</button>
        <button onClick={()=> navigate('/registration')} className='col-3 m-2'> Registeration</button>
    </div>
  )
}

export default Home