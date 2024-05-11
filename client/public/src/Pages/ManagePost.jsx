import React from 'react'
import TopBar from '../Elements/TopBar';
import Sidebar from '../Elements/Sidebar';
const ManagePost = () => {
    return (
        <div className="container-scroller">

            <TopBar />

            <div className="container-fluid page-body-wrapper" >
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper">
                        <div className="col-12 grid-margin stretch-card">
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Manage Posts</h4>
                                    <p className="card-description">
                                    </p>

                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table id="example" className="display expandable-table" style={{ width: "100%" }}>
                                                    <thead>
                                                        <tr>
                                                            <th>No</th>
                                                            <th>Title</th>
                                                            <th>Created At</th>
                                                            <th></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{ paddingTop: "30px" }} >

                                                        {/* {
                                                    interviewData.map((currentInterview, index) => {
                                                        return (

                                                            <tr key={currentInterview._id} >
                                                                <td>{index + 1}</td>
                                                                <td>{currentInterview._id}</td>
                                                                <td>{currentInterview.startDate}</td>
                                                                <td>{currentInterview.endDate}</td>
                                                                <td>
                                                                    <a href={`/editinterview?id=${currentInterview._id}`} style={{ fontSize: "20px", cursor: "pointer", color: "green" }} className="fa-solid fa-pen-to-square"></a>
                                                                    <i className="fa-solid fa-trash" onClick={() => { deleteIn(currentInterview._id) }} style={{ fontSize: "18px", cursor: "pointer", color: "red", marginLeft: "10px" }} ></i>
                                                                </td>
                                                            </tr>

                                                        )

                                                    })
                                                } */}

                                                        <tr>
                                                            <td>No</td>
                                                            <td>Title</td>
                                                            <td>Created At</td>
                                                            <td></td>
                                                        </tr>

                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
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

export default ManagePost