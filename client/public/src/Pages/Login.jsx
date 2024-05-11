import React from 'react'
import { login } from '../services/api';
import { useDispatch } from "react-redux";
import { setLogin } from "../store/slice";
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const callOnSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.useremail.value,
      password: e.target.userpassword.value
    }

    const res = await login(data);

    if (res.status === 200) {

      dispatch(
        setLogin({
          user: res.data.user,
          token: res.data.token,
          logged: true
        })
      )
      navigate("/allposts")

    }

  }


  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper" >


        <div className="content-wrapper d-flex align-items-center auth px-0">
          <div className="row w-100 mx-0">
            <div className="col-lg-4 mx-auto">
              {/* <div className="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Signup Success!</strong> kindly login to access dashboard.
              </div> */}
              <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                <div className="brand-logo">
                  {/* <img src="../uploads/images/<?php echo _siteconfig('_sitelogo'); ?>" alt="logo" /> */}
                </div>
                <h4>Hello! let's get started</h4>
                <h6 className="font-weight-light">Sign in to continue.</h6>
                <form onSubmit={callOnSubmit} className="pt-3 needs-validation" method="POST" action noValidate>
                  <div className="form-group">
                    <input type="text" name="useremail" className="form-control form-control-lg" id="exampleInputEmail1" placeholder="Email or Phone No" required />
                    <div className="invalid-feedback">Please type correct email</div>
                  </div>
                  <div className="form-group">
                    <input type="password" name="userpassword" className="form-control form-control-lg" id="exampleInputPassword1" placeholder="Password" required />
                    <div className="invalid-feedback">Please type correct password</div>
                  </div>
                  <div className="mt-3">
                    <button className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" name="submit">SIGN IN</button>
                  </div>
                  <div className="text-center mt-4 font-weight-light">
                    Don't have an account? <a href="signup" className="text-primary">Create</a>
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

export default Login