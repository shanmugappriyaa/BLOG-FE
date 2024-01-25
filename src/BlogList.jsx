import React from "react";

function BlogList() {
  const blogs = [
    {
      img: "blog-1.jpg",
      title: "DWDigitaWeb Blog",
      createdby: "saranya",
      createdat: "25/01/2013 11.00am",
      desc: "DWDigitaWeb is an inbound marketing agency. Their blog educates marketers on useful inbound tactics to help them grow their business and drive organic traffic. They write about lead generation, SEO, and how to use your blog to convert readers into customers.",
    },
    {
      img: "blog-1.jpg",
      title: "DWDigitaWeb Blog",
      createdby: "raja",
      createdat: "25/01/2013 10.15am",
      desc: "DWDigitaWeb is an inbound marketing agency. Their blog educates marketers on useful inbound tactics to help them grow their business and drive organic traffic. They write about lead generation, SEO, and how to use your blog to convert readers into customers.",
    },
    {
      img: "blog-1.jpg",
      title: "DWDigitaWeb Blog",
      createdby: "aswin",
      createdat: "26/01/2013 1.00pm",
      desc: "DWDigitaWeb is an inbound marketing agency. Their blog educates marketers on useful inbound tactics to help them grow their business and drive organic traffic. They write about lead generation, SEO, and how to use your blog to convert readers into customers.",
    },
    {
      img: "blog-1.jpg",
      title: "DWDigitaWeb Blog",
      createdby: "shanmu",
      createdat: "26/01/2013 4.00pm",
      desc: "DWDigitaWeb is an inbound marketing agency. Their blog educates marketers on useful inbound tactics to help them grow their business and drive organic traffic. They write about lead generation, SEO, and how to use your blog to convert readers into customers.",
    },
  ];

  return (
    <div className="p-2 mx-4">
      {blogs.map((blog, i) => (
        <div className="card mb-3" key={i}>
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
                <label className="">{blog.createdat}</label>
                <p className="card-text mt-4">{blog.desc}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlogList;
