import React from 'react'
import { addclub } from '../services/api';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopBar from '../Elements/TopBar';
import Sidebar from '../Elements/Sidebar';

const AddClub = () => {

    const { _id } = useSelector((state) => state.reducer.user);
    const token = useSelector((state) => state.reducer.token);

    toast.configure();

    const navigate = useNavigate();

    const callOnSubmit = async (e) => {

        e.preventDefault();

        const data = {
            userId: _id,
            name: e.target.title.value,
            description: e.target.description.value
        }

        const res = await addclub(token, data);


        if (res.status === 201) {
            toast.success('Club Created', {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            navigate("/manage-club")


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
                                        <h4 className="card-title">Create Club</h4>
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
                                                <div className="col">
                                                    <label htmlFor="title">Club Name</label>
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
                                                    <label htmlFor="description">Club Description</label>
                                                    <textarea className="form-control" name="description" id="description" rows={"10"}></textarea>
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

export default AddClub