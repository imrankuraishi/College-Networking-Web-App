import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const { userType } = useSelector((state) => state.reducer.user);

    const Admin = () => {
        return <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="/allposts">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Home</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/students">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Students</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/teachers">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Teachers</span>
                </Link>
            </li>


            <li className="nav-item">
                <Link className="nav-link" to="/addpost">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Add Post</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/addquery">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Add Query</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/manage-query">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Manage Query</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/addclub">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Add Club</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/manage-resource?id=1">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Manage Clubs</span>
                </Link>
            </li>




        </ul>;
    };

    const Teacher = () => {
        return <ul className="nav">
            <li className="nav-item">
                <Link className="nav-link" to="/allposts">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Home</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/students">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Students</span>
                </Link>
            </li>

            <li className="nav-item">
                <Link className="nav-link" to="/manage-query">
                    <i className="icon-grid menu-icon"></i>
                    <span className="menu-title">Manage Query</span>
                </Link>
            </li>
        </ul>;
    };

    const Student = () => {
        return (
            <ul className="nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/allposts">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Home</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/addquery">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Add Query</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/manage-query">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Manage Query</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/manage-club">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Clubs</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/manage-contact">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Contacts</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/manage-resource">
                        <i className="icon-grid menu-icon"></i>
                        <span className="menu-title">Resource</span>
                    </Link>
                </li>


            </ul>
        );
    };

    return (
        <nav className="sidebar sidebar-offcanvas" id="sidebar">
            {userType == 0 ? (
                <Admin />
            ) : userType == 1 ? (
                <Teacher />
            ) : userType == 2 ? (
                <Student />
            ) : (
                ""
            )}
        </nav>
    );
};

export default Sidebar;
