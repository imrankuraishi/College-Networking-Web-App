import React, { useState } from 'react'
import { register } from '../services/api';
import { useNavigate } from "react-router-dom";

const Registration = () => {

  const navigate = useNavigate();

  const [imgPath, setImgPath] = useState("http://bootdey.com/img/Content/avatar/avatar1.png")

  const callOnSubmit = async (e) => {
    e.preventDefault();


    const form = new FormData;

    form.append("firstName", e.target.firstName.value)
    form.append("lastName", e.target.lastName.value)
    form.append("email", e.target.useremail.value)
    form.append("phone", e.target.userphone.value)
    form.append("password", e.target.userpassword.value)
    form.append("userType", e.target.userType.value)
    form.append("picture", e.target.userPic.files[0]);
    form.append("picturePath", e.target.userPic.files[0].name);

    const res = await register(form);

    if (res.status === 201) {
      navigate("/")
    }

  }

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" >
        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-6 mx-auto">
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  <img src="../uploads/images/<?php echo _siteconfig('_sitelogo'); ?>" alt="logo" />
                </div>
                <h4>New here?</h4>
                <h6 className="font-weight-light">Signing up is easy. It only takes a few steps</h6>
                <form onSubmit={callOnSubmit} className="pt-3" method="POST" action>

                  <div className="row g-3" style={{ marginTop: "30px" }}>
                    <div className="col">
                      <div className="form-group">
                        <input type="text" name="firstName" className="form-control form-control-lg" id="firstName" placeholder="First Name" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <input type="text" name="lastName" className="form-control form-control-lg" id="lastName" placeholder="Last Name" />
                      </div>
                    </div>
                  </div>

                  <div className="row g-3" style={{ marginTop: "30px" }}>
                    <div className="col">
                      <div className="form-group">
                        <input type="email" name="useremail" className="form-control form-control-lg" id="useremail" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <input type="text" name="userphone" className="form-control form-control-lg" id="userphone" placeholder="Phone No" />
                      </div>
                    </div>
                  </div>

                  <div className="row g-3" style={{ marginTop: "30px" }}>
                    <div className="col">
                      <div className="form-group">
                        <input type="password" name="userpassword" className="form-control form-control-lg" id="userpassword" placeholder="Password" />
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-group">
                        <select id="userType" name="userType"
                          class="form-control form-control-lg" required>
                          <option>Type</option>
                          <option value="1">Teacher</option>
                          <option value="2">Student</option>
                        </select>
                      </div>

                    </div>
                  </div>

                  <div className="row g-3" style={{ marginTop: "30px" }}>
                    <div className="col d-flex align-items-center justify-content-center">
                      <div className="form-group">
                        <div className="form-group">
                          <input type="file" name="userPic" id='userPic' className="form-control form-control-lg" required />
                        </div>
                      </div>
                    </div>
                  </div>









                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" name="submit">SIGN UP</button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Already have an account? <a href="/" className="text-primary">Login</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Registration