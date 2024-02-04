import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AxiosService from "./utils/ApiService";
function CreateBlog() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [short, setShortDesc] = useState("");
  const [desc, setDesc] = useState("");
  let navigate = useNavigate();

  const createBlogEvent = async (ev) => {
    ev.preventDefault();
    const blog = await AxiosService.post("blog/create", {
      title: title,
      imageUrl: "blog-2.jpg",
      shortDesc: short,
      desc: desc,
    });
    if (blog.status === 201) {
      toast.success("blog created successfully");
      navigate("/bloglist");
    }
    else{
      toast.error("blog creation fails")
    }
  };
  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <div className="d-flex row m-2">
        <div className="d-flex justify-content-center">
          <h3 className="">CreateBlog </h3>
        </div>

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
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
              <label>Short Description</label>
              <input
                type="textarea"
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

              <button className="mt-2 btn btn-primary" onClick={(ev) => createBlogEvent(ev)}>
                {" "}
                Create Blog
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CreateBlog;
