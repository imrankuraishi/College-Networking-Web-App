import React from 'react'
import TopBar from '../Elements/TopBar'
import Sidebar from '../Elements/Sidebar'
const ManageContact = () => {



    return (
        <>
            <div className="container-scroller">

                <TopBar />

                <div className="container-fluid page-body-wrapper" >
                    <Sidebar />

                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="col-12 grid-margin stretch-card">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Contacts</h4>
                                        <p className="card-description">
                                        </p>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="table-responsive">
                                                    <table id="example" className="display expandable-table" style={{ width: "100%" }}>
                                                        <thead>
                                                            <tr>
                                                                <th>No</th>
                                                                <th>Teacher Name</th>
                                                                <th>Teacher Contact</th>
                                                                <th>Branch</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody style={{ paddingTop: "30px" }} >

                                                            <tr >
                                                                <td>1</td>
                                                                <td>Sharma ji</td>
                                                                <td>8989121212</td>
                                                                <td>CSE</td>
                                                            </tr>
                                                            <tr >
                                                                <td>2</td>
                                                                <td>Contact 2</td>
                                                                <td>8989121212</td>
                                                                <td>Mech</td>
                                                            </tr>
                                                            <tr >
                                                                <td>2</td>
                                                                <td>Contact 2</td>
                                                                <td>8989121212</td>
                                                                <td>Mech</td>
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
        </>
    )
}

export default ManageContact