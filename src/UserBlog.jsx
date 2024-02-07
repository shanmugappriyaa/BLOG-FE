import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Link } from "react-floating-action-button";
import { FaPlus } from "react-icons/fa6";
import moment from "moment";
import AxiosService from "./utils/ApiService";

function UserBlog() {
  let navigate = useNavigate();
  let userData = JSON.parse(sessionStorage.getItem("userData"));
  const [blogs, setBlogs] = useState([]);
  const getBlogs = async () => {
    try {
      const id = userData._id;
      const res = await AxiosService.get(`/blog/userblogs/${id}`);
      console.log("res==>", res);
      setBlogs(res?.data?.blogs);
    } catch (error) {
      console.log(error);
    }
  };
  const getBlogByStatus = async (status) => {
    try {
      const res = await AxiosService.get(`/blog/status/${status}`);
      console.log("getBlogByStatus--->", res);
      setBlogs(res?.data?.blog);
    } catch (error) {
      console.log(error);
    }
  };
  const getInitialState = () => {
    const value = "All";
    return value;
  };
  const [value, setValue] = useState(getInitialState);

  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);

    e.target.value ? getBlogByStatus(e.target.value) : getBlogs();
  };

  const statusChange = async (id, ev, status) => {
    ev.preventDefault();
    console.log("blogid-->", id);
    try {
      const res = AxiosService.put(`blog/updatestatus/${id}`, {
        blogstatus: status,
      });
      console.log(res);
    } catch (error) {}
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <div className="p-2 mx-4">
        {/* <!-- Example single danger button --> */}

        <div className="d-flex justify-content-end mb-4">
          <select value={value} onChange={handleChange}>
            <option value="">All</option>
            <option value="PENDING">Pending</option>
            <option value="APPROVED">Approved</option>
            <option value="REJECTED">Rejected</option>
          </select>
        </div>
        {blogs &&
          blogs.map((blog, i) => (
            <div
              className="card mb-3"
              onClick={(e) => {
                e.preventDefault();
                navigate(`/blog/${blog._id}`);
              }}
              key={i}
            >
              <div className="card-body shadow d-flex">
                <div className="row-4 m-2">
                  <img
                    src={blog.imageUrl?.[0]?.url}
                    alt="image"
                    className="imgage-thumbnail"
                  />
                </div>
                <div>
                  <div className="row ">
                    <h3 className="col-9"> {blog.title}</h3>
                    {blog.blogstatus === "PENDING" ? (
                      <p className="col-3 d-flex justify-content-end fw-bolder text-warning">
                        {blog.blogstatus}
                      </p>
                    ) : blog.blogstatus === "REJECTED" ? (
                      <p className="col-3 d-flex justify-content-end fw-bolder text-danger">
                        {blog.blogstatus}
                      </p>
                    ) : (
                      <p className="col-3 d-flex justify-content-end fw-bolder text-success">
                        {blog.blogstatus}
                      </p>
                    )}
                  </div>
                  <div className="row">
                    <label className="">
                      {moment(blog.createdAt).format("DD MMM YYYY")}
                    </label>

                    <p className="card-text mt-4">{blog.shortDesc}</p>
                    {/* <p className="fw-bolder text-danger">
                      {" "}
                      {blog.blogstatus}
                    </p> */}
                    {/* {blog?.blogstatus == "REJECTED" && (
                  )} */}
                  </div>

                  {/* {blog?.blogstatus == "PENDING" && (
                  <div className="d-flex justify-content-end">
                    <button
                      className="btn btn-success me-5"
                      onClick={(e) => statusChange(blog._id, e, "APPROVED")}
                    >
                      Approved
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={(e) => statusChange(blog._id, e, "REJECTED")}
                    >
                      Rejected
                    </button>
                  </div>
                )} */}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

export default UserBlog;
