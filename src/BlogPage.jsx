import React from "react";
import { CiEdit } from "react-icons/ci";
function BlogPage() {
  return (
    <div className="p-4">
      <h4 className="text-align-center">DWDigitaWeb Blog</h4>
      <div className="col p-4">
        <label className="col-4">25/01/2013 11.00am</label>
        <label className="col-4">created by saranya</label>
        <button className=" col-4 btn btn-primary justify-content-center"> <CiEdit />Edit Post</button>
      </div>
      <img src="phone-banner.jpg" alt="image" className="img-fluid" />
      <p className="p-4">
        DWDigitaWeb is an inbound marketing agency. Their blog educates
        marketers on useful inbound tactics to help them grow their business and
        drive organic traffic. They write about lead generation, SEO, and how to
        use your blog to convert readers into customers. DWDigitaWeb is an
        inbound marketing agency. Their blog educates marketers on useful
        inbound tactics to help them grow their business and drive organic
        traffic. They write about lead generation, SEO, and how to use your blog
        to convert readers into customers. DWDigitaWeb is an inbound marketing
        agency. Their blog educates marketers on useful inbound tactics to help
        them grow their business and drive organic traffic. They write about
        lead generation, SEO, and how to use your blog to convert readers into
        customers.
      </p>
    </div>
  );
}

export default BlogPage;
