import React from 'react'
import TopBar from '../Elements/TopBar';
import Sidebar from '../Elements/Sidebar';
const UpdatePost = () => {
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
                                <form className="forms-sample">
                                    <div className="row g-3" style={{ marginTop: "30px" }}>
                                        <div className="col">
                                            <label for="postType" class="form-label">Post Type</label>
                                            <select id="postType" name="postType"
                                                class="form-control" required>
                                                <option value="0">Event</option>
                                                <option value="1">Internship</option>
                                                <option value="2">Blog</option>
                                                <option value="4">Other</option>
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

export default UpdatePost