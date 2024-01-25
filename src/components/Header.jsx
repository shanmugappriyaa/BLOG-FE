import React from "react";
import { ImBlogger2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
function Header() {
  let navigate = useNavigate();
  return (
    <div className="">
      <nav class="navbar navbar-light bg-primary p-2">
        <div className="col-6 text-align-center p-2">
          <h4 onClick={() => navigate("/bloglist")}>
            {" "}
            <ImBlogger2 /> Shanmu-Blog
          </h4>
        </div>
        <div className="col-6 d-flex justify-content-end">
          <div>
            <button onClick={() => navigate("/login")} className="p-2">
              {" "}
              Login
            </button>
            <button onClick={() => navigate("/registration")} className="p-2">
              {" "}
              Registration
            </button>
          </div>
          <div className="">
            <h6> username</h6>
            <button onClick={""} className="p-2">
              {" "}
              create post
            </button>
            <button onClick={() => navigate("/registration")} className="p-2">
              {" "}
              logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
