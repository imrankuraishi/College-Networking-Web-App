import React, { useEffect, useState } from 'react'
import { getAllusers } from '../services/api'
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";
import TopBar from '../Elements/TopBar';
import Sidebar from '../Elements/Sidebar';


const AllStudents = () => {

  const token = useSelector((state) => state.reducer.token);


  const [state, setState] = useState({
    isLoading: false,
    list: []
  })

  const fetchAllStudents = async () => {
    setState({ ...state, isLoading: true })
    const res = await getAllusers(token);

    let filterList = res.data.filter((ele) => {
      return ele.userType == "2"
    })

    setState({ ...state, isLoading: false, list: filterList })
  }


  useEffect(() => {
    fetchAllStudents();
  }, [])

  const { isLoading, list } = state;


  return (
    <>
      <div className="container-scroller">

        <TopBar />

        <div className="container-fluid page-body-wrapper" >
          <Sidebar />

          {
            isLoading === false ? (
              <div className="main-panel">
                <div className="content-wrapper">
                  <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Manage Students</h4>
                        <p className="card-description">
                        </p>

                        <div className="row">
                          <div className="col-12">
                            <div className="table-responsive">
                              <table id="example" className="display expandable-table" style={{ width: "100%" }}>
                                <thead>
                                  <tr>
                                    <th>No</th>
                                    <th>Pic</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                  </tr>
                                </thead>
                                <tbody style={{ paddingTop: "30px" }} >

                                  {
                                    list.map((currentlist, index) => {
                                      return (

                                        <tr key={currentlist._id} >
                                          <td>{index + 1}</td>
                                          <td><img src={`http://localhost:6001/assets/${currentlist.picturePath}`} style={{ width: "50px", height: "50px", borderRadius: "50%" }} alt="" /></td>
                                          <td>{currentlist.firstName} {currentlist.lastName}</td>
                                          <td>{currentlist.email}</td>
                                          <td>{currentlist.phone}</td>
                                        </tr>

                                      )

                                    })
                                  }

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

            ) : (
              <h5>Loading</h5>
            )
          }
        </div>
      </div>
    </>
  )
}

export default AllStudents