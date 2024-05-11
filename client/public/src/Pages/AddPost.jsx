import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { addpost } from '../services/api';
import TopBar from '../Elements/TopBar';
import Sidebar from '../Elements/Sidebar';

const AddPost = () => {


    const [postType, setPostType] = useState(0)


    const { _id } = useSelector((state) => state.reducer.user);
    const token = useSelector((state) => state.reducer.token);

    toast.configure();

    const navigate = useNavigate();

    const callOnSubmit = async (e) => {

        e.preventDefault();

        const form = new FormData;

        form.append("userId", _id)
        form.append("postType", e.target.postType.value)
        form.append("postFor", e.target.postFor.value)
        form.append("title", e.target.title.value)
        form.append("description", e.target.description.value)
        form.append("picturePath", e.target.file.files[0].name)
        form.append("picture", e.target.file.files[0])

        const res = await addpost(form, token);


        if (res.status === 201) {
            toast.success('Post Created', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            navigate("/allposts")


        } else {
            toast.error(`Error : ${res.data.message} `, {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }

    }


    return (
        <div className="container-scroller">

            <TopBar />

            <div className="container-fluid page-body-wrapper" >
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="row">
                            <div className="col-md-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Add Post</h4>
                                        <p className="card-description"></p>
                                        <div className="forms-sample">
                                            <div className="row g-3" style={{ marginTop: "30px" }}>
                                                <div className="col">
                                                    <h5></h5>
                                                </div>
                                            </div>
                                        </div>
                                        <form onSubmit={callOnSubmit} className="forms-sample">
                                            <div className="row g-3" style={{ marginTop: "30px" }}>
                                                <div className="col-6">
                                                    <label for="postType" class="form-label">Post Type</label>
                                                    <select onChange={(e) => { setPostType(e.target.value) }} id="postType" name="postType"
                                                        class="form-control" required>
                                                        <option value="0">Event</option>
                                                        <option value="1">Internship</option>
                                                        <option value="2">Blog</option>
                                                        <option value="4">Resource</option>
                                                        <option value="5">Other</option>
                                                    </select>
                                                </div>

                                                <div className={` ${postType == 4 ? "col-6" : "hidden"} `}>
                                                    <label for="postFor" class="form-label">For</label>
                                                    <select id="postFor" name="postFor"
                                                        class="form-control" required>
                                                        <option selected value="0">All</option>
                                                        <option value="1">1st Year</option>
                                                        <option value="2">2nd Year</option>
                                                        <option value="3">3rd Year</option>
                                                        <option value="4">4th Year</option>
                                                        <option value="5">Placement</option>
                                                        <option value="6">GATE</option>
                                                    </select>
                                                </div>

                                            </div>

                                            <div className="row g-3" style={{ marginTop: "30px" }}>
                                                <div className="col">
                                                    <label htmlFor="title">Title</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        name="title"
                                                        id="title"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row g-3" style={{ marginTop: "30px" }}>
                                                <div className="col">
                                                    <label htmlFor="question">Image</label>
                                                    <input
                                                        type="file"
                                                        className="form-control"
                                                        name="file"
                                                        id="file"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                            <div className="row g-3" style={{ marginTop: "30px" }}>
                                                <div className="col">
                                                    <label htmlFor="description">Description</label>
                                                    <textarea className="form-control" name="description" id="description" rows={"20"}></textarea>
                                                </div>
                                            </div>

                                            <div className="col-12" style={{ marginTop: "50px" }}>
                                                <button
                                                    type="submit"
                                                    name="submit"
                                                    className="btn btn-warning"
                                                >
                                                    Submit
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddPost