import React, { useEffect, useState } from 'react'
import { deleteQuery, getAllquery } from '../services/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import TopBar from '../Elements/TopBar';
import Sidebar from '../Elements/Sidebar';


import { AiFillDelete } from "react-icons/ai";

const ManageQuery = () => {

  const token = useSelector((state) => state.reducer.token);
  const { userType } = useSelector((state) => state.reducer.user);

  const navigate = useNavigate();

  const [state, setState] = useState({
    isLoading: false,
    list: []
  })

  const fetchAllQuery = async () => {
    setState({ ...state, isLoading: true })
    const res = await getAllquery(token);
    setState({ ...state, isLoading: false, list: res.data })
  }

  const deleteQ = async (id) => {

    const res = await deleteQuery(token, id);


    if (res.status === 200) {
      toast.success('Query Deleted', {
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


  useEffect(() => {
    fetchAllQuery();
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
                        <h4 className="card-title">Manage Query</h4>
                        <p className="card-description">
                        </p>

                        <div className="row">
                          <div className="col-12">
                            <div className="table-responsive">
                              <table id="example" className="display expandable-table" style={{ width: "100%" }}>
                                <thead>
                                  <tr>
                                    <th>No</th>
                                    <th>Type</th>
                                    <th>Status</th>
                                    <th></th>
                                    {
                                      userType == 0 ? (<th></th>) : ""
                                    }
                                  </tr>
                                </thead>
                                <tbody style={{ paddingTop: "30px" }} >

                                  {
                                    list.map((currentlist, index) => {
                                      return (

                                        <tr key={currentlist._id} >
                                          <td>{index + 1}</td>
                                          <td>{currentlist.type}</td>
                                          <td>{currentlist.status}</td>
                                          <td>
                                            <Link className="btn btn-primary" to={`/update-query?id=${currentlist._id}`} >Solve</Link>

                                          </td>
                                          {
                                            userType == 0 ? (<td> <AiFillDelete className='text-xl  cursor-pointer' style={{color:"black"}}  onClick={() => {
                                              deleteQ(currentlist._id);
                                            }} /> </td>) : ""
                                          }

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

export default ManageQuery