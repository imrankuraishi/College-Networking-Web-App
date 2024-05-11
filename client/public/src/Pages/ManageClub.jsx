import React, { useEffect, useState } from 'react'
import { getAllClub } from '../services/api'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import TopBar from '../Elements/TopBar';
import Sidebar from '../Elements/Sidebar';

const ManageClub = () => {

    const token = useSelector((state) => state.reducer.token);


    toast.configure();

    const navigate = useNavigate();

    const [state, setState] = useState({
        isLoading: false,
        list: []
    })
    const fetchAllClubs = async () => {
        setState({ ...state, isLoading: true })
        const res = await getAllClub(token);
        setState({ ...state, isLoading: false, list: res.data })
    }


    useEffect(() => {
        fetchAllClubs();
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
                                                <h4 className="card-title">Manage Clubs</h4>
                                                <p className="card-description">
                                                </p>

                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="table-responsive">
                                                            <table id="example" className="display expandable-table" style={{ width: "100%" }}>
                                                                <thead>
                                                                    <tr>
                                                                        <th>No</th>
                                                                        <th>Id</th>
                                                                        <th>Club Name</th>
                                                                        <th>Members</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody style={{ paddingTop: "30px" }} >

                                                                    {
                                                                        list.map((currentlist, index) => {
                                                                            return (

                                                                                <tr key={currentlist._id} >
                                                                                    <td>{index + 1}</td>
                                                                                    <td>{currentlist._id}</td>
                                                                                    <td>{currentlist.name}</td>
                                                                                    <td>
                                                                                        <Link to={`/view-club?id=${currentlist._id}`} className="btn btn-primary" >View</Link>
                                                                                    </td>
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

export default ManageClub