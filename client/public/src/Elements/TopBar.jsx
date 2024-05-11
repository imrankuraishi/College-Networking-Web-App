import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../store/slice";

const TopBar = () => {

  const { picturePath, firstName } = useSelector((state) => state.reducer.user);
  const dispatch = useDispatch();

  const callLogOut = () => {
    dispatch(setLogout());
  }

  return (

    <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        {/* <a className="navbar-brand brand-logo mr-5" href="index.html"><img src="../images/logo-mini.svg" className="mr-2" alt="logo" /></a>
        <a className="navbar-brand brand-logo-mini" href="index.html"><img src="../images/logo-mini.svg" alt="logo" /></a> */}
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
          <span className="icon-menu"></span>
        </button>


        <ul className='navbar-nav navbar-nav-right'>
          <li className="nav-item nav-profile dropdown">


            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown" id="profileDropdown">
              <img src={`http://localhost:6001/assets/${picturePath}`} alt="profile" />
            </a>
            <div className="dropdown-menu dropdown-menu-right navbar-dropdown" aria-labelledby="profileDropdown">
              <a href='/' onClick={callLogOut} className="dropdown-item" >
                <i className="ti-power-off text-primary" />
                Logout
              </a>
            </div>
          </li>
        </ul>

        <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
          <span class="icon-menu"></span>
        </button>
      </div>

    </nav>

  )
}

export default TopBar