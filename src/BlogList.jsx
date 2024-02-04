import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Link } from "react-floating-action-button";
import { FaPlus } from "react-icons/fa6";
import moment from "moment";

function BlogList() {
  let navigate = useNavigate();
  let userData = JSON.parse(sessionStorage.getItem("userData"));
  const [blogs,setBlogs] =useState([]);
  const getBlogs = async() => {
    try {
      const res = await axios.get('/blog');
    
      setBlogs(res?.data?.allBlogs)
    } catch (error) {
     console.log(error) 
    }
  }
  useEffect(()=>{
    getBlogs()
 },[])
 
  return <>

    <div className="p-2 mx-4">
      { blogs && blogs.map((blog, i) => (
        <div className="card mb-3"  onClick = {()=>navigate(`/blog/${blog._id}`)} key={i}>
          <div className="card-body shadow d-flex">
            <div className="row-4 m-2">
              <img src={blog.img} alt="image" className="img-fluid" />
            </div>
            <div>
              <div className="row ">
                <h3 className="col-6"> {blog.title}</h3>
                <label className="col-6 d-flex justify-content-end">
                  created by {blog.createdby}
                </label>
              </div>
              <div className="row">
                <label className="">{moment(blog.createdAt).format('DD MMM YYYY')}</label>
        
                <p className="card-text mt-4">{blog.shortDesc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
          {userData?.firstName ?  (  <Container>
          <Button
            tooltip="Create a New Note!"
            onClick={() => navigate("/createBlog")}
          >
            <FaPlus />
          </Button>
        </Container>
          ) :""}
    </div>
    </>
}

export default BlogList;
