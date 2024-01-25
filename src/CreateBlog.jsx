import React from "react";

function CreateBlog() {
  const createBlogEvent = () => {
    console.log("create blog triggered");
  };
  return (
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
            />
            <label>Image Url</label>
            <input type="file" placeholder="Image link" className="mb-2" />
            <label> Objective</label>
            <input
              type="textarea"
              placeholder=" Enter short desc"
              className="mb-2"
            />
            <label> Description</label>
            <textarea placeholder="Description" className="mb-2"></textarea>

            <button className="mt-2" onClick={createBlogEvent()}>
              {" "}
              Create Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
