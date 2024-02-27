import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AxiosService from "./utils/ApiService";

//Ref: Upload files as a FORM-DATA
// https://refine.dev/blog/how-to-multipart-file-upload-with-react-hook-form/#multipart-file-upload-with-react-hook-form
function CreateBlog() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [short, setShortDesc] = useState("");
  const [desc, setDesc] = useState("");
  let navigate = useNavigate();
  let userData = JSON.parse(sessionStorage.getItem("userData"));
  console.log("userData-->",userData)
  const id = userData._id;
  console.log("userId-->",id)
  const createBlogEvent = async (ev) => {
    ev.preventDefault();
    const blog = await AxiosService.post("blog/create", {
      title: title,
      imageUrl: "",
      shortDesc: short,
      desc: desc,
    });
    if (blog.status === 201) {
      uploadImage(blog?.data?.result?._id);
    } else {
      toast.error("blog creation fails");
    }
  };
  const uploadImage = async (blogId) => {
    console.log("img[0]=======> ", img[0]);
    const formData = new FormData();
    formData.set("images", img[0]);
    try {
      const res = await AxiosService.put(`blog/upload/${blogId}`, formData);
      console.log(res);
      if (res.status == 200) {
        toast.success("blog created successfully! Pls wait for Admin Approval");
        navigate("/userBlog");
      } else {
        toast.error("blog creation fails");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleFileInputChange = (e) => {
    console.log(e.target.files);
    setImg(e.target.files);
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
                onChange={handleFileInputChange}
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

              <button
                className="mt-2 btn btn-primary"
                onClick={(ev) => createBlogEvent(ev)}
              >
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
