import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import AxiosService from "./utils/ApiService";

function EditBlog() {
  let params = useParams();
  let [title, setTitle] = useState("");
  let [imageUrl, setImage] = useState("");
  let [desc, setDesc] = useState("");
  const [short, setShortDesc] = useState("");
  let [blog, setBlog] = useState({});
  let navigate = useNavigate();

  let getBlog = async () => {
    try {
      let res = await AxiosService.get(`/blog/${params.id}`);
      console.log("res-->", res);
      setTitle(res.data.blog.title);
      // setImage(res.data.blog.imageUrl);
      setDesc(res.data.blog.desc);
    } catch (error) {
      console.log(error);
      // toast.error(error.response.data.message);
      // if(error.response.status===401)
      // {
      //   logout()
      // }
    }
  };
  useEffect(() => {
    getBlog();
  }, []);

  let editBlog = async (e) => {
    e.preventDefault();
    
    try {
      let res = await AxiosService.put(`/blog/edit/${params.id}`, {
        title,
        imageUrl,
        desc,
      });
      console.log("Edit Res--------> ", res);
      // if (res.status === 200) {
      //   toast.success(res.data.message);
      //   navigate('/dashboard')
      // }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      // if(error.response.status===401)
      // {
      //   logout()
      // }
    }
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="d-flex col-6 ">
        <form>
          <div className="row p-2 mb-4">
            <label> Title</label>
            <input
              type="text"
              placeholder=" Enter the title"
              className="mb-2"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label>Image Url</label>
            <input
              type="file"
              placeholder="Image link"
              className="mb-2"
              value={imageUrl}
              onChange={(e) => setImage(e.target.value)}
            />
            <label>Short Description</label>
            <textarea
              placeholder=" Enter short desc"
              className="mb-2"
              value={short}
              onChange={(e) => setShortDesc(e.target.value)}
            />
            <label> Description</label>
            <textarea
              placeholder="Description"
              className="mb-2"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            ></textarea>

            <button
              className="mt-2 btn btn-primary"
              onClick={(e) => editBlog(e)}
            >
              {" "}
              SAVE
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default EditBlog;
