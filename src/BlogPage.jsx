import React, { useEffect, useState } from "react";
import { CiEdit } from "react-icons/ci";
import useLogout from "./hooks/useLogout";
import { useNavigate, useParams } from "react-router-dom";
import AxiosService from "./utils/ApiService";
import { ToastContainer, toast } from "react-toastify";
import moment from "moment";
function BlogPage() {
  let params = useParams();
  let navigate = useNavigate();
  const [blog, setBlog] = useState();
  let userData = JSON.parse(sessionStorage.getItem("userData"));

  let getBlog = async () => {
    try {
      let res = await AxiosService.get(`/blog/${params.id}`);
      setBlog(res.data.blog);
    } catch (error) {
      toast.error(error.response.data.message);
      // if(error.response.status===401)
      // {
      //   logout()
      // }
    }
  };
  useEffect(() => {
    getBlog();
  }, []);
  // useEffect(()=>{
  //   if(params.id){
  //     getBlog()
  //   }
  //   else{
  //     logout()
  //   }
  //     },[])
  return (
    <div className="p-4">
      {blog && (
        <>
          <h4 className="text-align-center">{blog.title}</h4>
          <div className="col p-4">
            <div className="d-flex">
            <label className="col-6 d-flex justify-content-start">createdAt : {moment(blog.createdAt).format("DD MMM YYYY")}</label>
            <label className="col-6 d-flex justify-content-end">created by {blog.createdUserName}</label>
            </div>
           
            {userData?._id === blog.createdBy && (
              <button
                onClick={() => navigate(`/editblog/${blog._id}`)}
                className=" col-4 btn btn-primary justify-content-center"
              >
                {" "}
                <CiEdit />
                Edit Post
              </button>
            )}
          </div>
          <img src={blog.imageUrl?.[0]?.url} alt="image" className="img-fluid" />
          <p className="p-4">{blog.desc}()</p>
        </>
      )}
    </div>
  );

  // function AdminBlog(){
  //   let params = useParams()
  //   let [blog,setBlog] = useState({})
  //   let getBlog = async()=>{
  //     try {
  //       let res = await AxiosService.get(`/blog/${params.id}`)
  //       if(res.status===200)
  //       {
  //           setBlog(res.data.blog)
  //       }
  //     } catch (error) {
  //       toast.error(error.response.data.message)
  //       if(error.response.status===401)
  //       {
  //         logout()
  //       }
  //     }
  //   }

  //   useEffect(()=>{
  //     if(params.id)
  //     {
  //       getBlog()
  //     }
  //     else
  //     {
  //       logout()
  //     }
  //   },[])

  //   let changeStatus = async(status)=>{
  //     try {
  //       let res = await AxiosService.put(`/blog/status/${blog._id}/${status}`)
  //       if(res.status===200)
  //       {
  //         getBlog()
  //       }
  //     } catch (error) {
  //       toast.error(error.response.data.message)
  //       if(error.response.status===401)
  //       {
  //         logout()
  //       }
  //     }
  //   }
  //   return <div>
  //     <div className='blogs-wrapper'><BlogTile blog={blog}/></div>
  //     <div style={{textAlign:"center"}}>
  //      {
  //        blog.status!=='pending'?<button className='btn btn-warning' onClick={()=>changeStatus("pending")}>Pending</button>:<></>
  //      }
  //      &nbsp;
  //      {
  //       blog.status!=='approved'?<button className='btn btn-success' onClick={()=>changeStatus("approved")}>Approve</button>:<></>
  //      }
  //      &nbsp;
  //      {
  //       blog.status!=='rejected'?<button className='btn btn-danger' onClick={()=>changeStatus("rejected")}>Reject</button>:<></>
  //      }
  //     </div>
  //   </div>
  // }
}
export default BlogPage;
