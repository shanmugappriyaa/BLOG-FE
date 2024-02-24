import axios from "axios";
import React, { useState } from "react";
import { ImBlogger, ImBlogger2 } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import SimpleAxiosService from "./utils/SimpleApiService";
function Registration() {
  let navigate = useNavigate();
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function handleReg(ev) {
    ev.preventDefault();
    const userDeatils = await SimpleAxiosService.post("user/signup", {
      firstName: fname,
      lastName: lname,
      email: email,
      password: password,
    });
    console.log(userDeatils);
    if (userDeatils.status == 201) {
      navigate("/login");
    } else {
      alert("registration Fail");
    }
  }
  return (
    <div className="d-flex ">
      <div className="col-6 text-align-center p-2 d-flex max-vh-90 flex-column justify-content-center">
        <h4
          className="text-white show-hover"
          onClick={() => navigate("/bloglist")}
        >
          {" "}
          <ImBlogger2 /> My-Blogs
        </h4>
        <h1 className="text-white fw-bolder mt-5">Hang onto your memories </h1>
        <p className="text-white">
          Save the moments that matter.Blogger lets you safely store thousands
          of posts, photos, and more with Google.
        </p>
      </div>
      <div className="col-6 d-flex min-vh-100  justify-content-end align-items-center">
        <div className="col-10 card border-0 me-5">
          <div className="card-body">
            <div className="px-5 py-3">
              <div className="text-center">
                <h4> Registration </h4>
              </div>

              <form>
                <div className="d-flex flex-column">
                  <div>
                    <label class="form-label">First name</label>
                    <input
                      type="text"
                      id="form3Example1"
                      className="form-control"
                      value={fname}
                      onChange={(e) => setFname(e.target.value)}
                    />
                  </div>
                  <div>
                    <label class="form-label">Last name</label>
                    <input
                      type="text"
                      id="form3Example2"
                      class="form-control"
                      value={lname}
                      onChange={(e) => setLname(e.target.value)}
                    />
                  </div>
                  {/* <div class="row mb-4"></div> */}
                  <label className="form-label">Email address</label>
                  <input
                    type="email"
                    id="form3Example3"
                    class="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <label className="form-label">Password</label>

                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary custom-btn m-4"
                      onClick={handleReg}
                    >
                      Sign up
                    </button>
                  </div>
                  <div className="text-center">
                    Already have account?
                    <Link to={"/login"}>Login</Link> here
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;
