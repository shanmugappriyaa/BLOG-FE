import React, { useEffect, useState } from 'react'
import AxiosService from './utils/ApiService'
import useLogout from './hooks/useLogout'
import { useNavigate } from 'react-router-dom'

function Dashboard() {

    let userData = JSON.parse(sessionStorage.getItem('userData'))
    let [blogs,setBlogs] = useState([])
    let navigate = useNavigate
    let logout = useLogout();

    let getBlogs = async()=>{
try {
    let url = userData.role ==='admin' ?'/blog':'/blogs/user'
    let res = await AxiosService.get(url);
    if(res.status === 200){
        setBlogs(res.data.blogs)
    }
    
} catch (error) {
    if(error.response.status===401)
    {
      logout()
    }
}
    }

    useEffect(()=>{
getBlogs()
    },[])
  return (
    <div className='container-fluid'>
        <table className=' table table-bordered'>
        <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Image</th>
          <th>Created At</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {blogs.map((blog,index)=>{
            return <tr key ={blog._id} onClick={()=>navigate(`/blog/${blog._id}`)} className='cursor-pointer'>
                <td>{index+1}</td>
                <td>{blog.title}</td>
                <td><img src={blog.imageUrl} className='img-thumbnail'/></td>
                <td>{blog.createdAt}</td>  
                <td>{blog.status}</td> 
            </tr>
        })
        }
      </tbody>
        </table>
        </div>
  )
}

export default Dashboard