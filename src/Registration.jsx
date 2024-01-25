import React from "react";
import { useNavigate } from "react-router-dom";
function Registration() {
let navigate = useNavigate();
function handleReg(){
    navigate('/login')
}
  return (
    <div className="d-flex row p-2 m-4">
        <div className="align-items-center m-4">
      <h4> Registration </h4>  
        </div>
      
      <div className="col-8 justify-content-center">
      <form>
        <div class="row mb-4">
          <div class="col">
          <label class="form-label">First name</label>
            <input type="text" id="form3Example1" className="form-control" />
            
          </div>
          <div class="col">
          <label class="form-label">Last name</label>
            <input type="text" id="form3Example2" class="form-control" />
         
          </div>
        </div>
        <label className="form-label">Email address</label>
        <input type="email" id="form3Example3" class="form-control" />
        <label className="form-label">Password</label>

        <input type="password" id="form3Example4" className="form-control" />
       

        <button type="button" className="btn btn-primary  m-4" onClick={handleReg}>
          Sign up
        </button>
      </form>
      </div>
     
    </div>
  );
}

export default Registration;
