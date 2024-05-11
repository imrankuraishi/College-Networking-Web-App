import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { getquery, updatequery } from "../services/api";
import { AiOutlineComment } from "react-icons/ai"
import TopBar from '../Elements/TopBar';
import Sidebar from '../Elements/Sidebar';
const UpdateQuery = () => {
    toast.configure();
    const navigate = useNavigate();


    const { email } = useSelector((state) => state.reducer.user)
    const token = useSelector((state) => state.reducer.token);
    let [searchParams, setSearchParams] = useSearchParams();
    let queryId = searchParams.get("id");

    const [state, setState] = useState({
        isLoading: false,
        queryDetails: {},
    });

    const getCurrentQuery = async () => {
        setState({ ...state, isLoading: true });
        const res = await getquery(token, queryId);
        setState({ ...state, isLoading: false, queryDetails: res.data });
    };

    const callOnSubmit = async (e) => {
        e.preventDefault();

        const newQuery = {
            email: email,
            status: "resolved",
            feedback: e.target.feedback.value,
        };

        const res = await updatequery(token, newQuery, queryId);

        if (res.status === 200) {
            toast.success("Query Update", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

            navigate("/manage-query");
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
    };

    useEffect(() => {
        getCurrentQuery();
    }, []);

    const { isLoading, queryDetails } = state;

    return (
        <>
            <div className="container-scroller">

                <TopBar />

                <div className="container-fluid page-body-wrapper" >
                    <Sidebar />
                    {isLoading === false ? (
                        <div className="main-panel">
                            <div className="content-wrapper">
                                <div className="row">
                                    <div className="col-md-12 grid-margin stretch-card">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">Update Your Query</h4>
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
                                                            <label for="postType" class="form-label">
                                                                Query Type
                                                            </label>
                                                            <select
                                                                id="postType"
                                                                name="postType"
                                                                class="form-control"
                                                                required
                                                            >
                                                                {queryDetails.type == "academic" ? (
                                                                    <>
                                                                        <option selected value="academic">
                                                                            Academic
                                                                        </option>
                                                                    </>
                                                                ) : queryDetails.type == "service" ? (
                                                                    <>
                                                                        <option selected value="service">
                                                                            Service
                                                                        </option>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <option selected value="disciplinary">
                                                                            Disciplinary
                                                                        </option>
                                                                    </>
                                                                )}
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="row g-3" style={{ marginTop: "30px" }}>
                                                        <div className="col">
                                                            <label htmlFor="description">Query</label>
                                                            <textarea
                                                                className="form-control"
                                                                name="description"
                                                                id="description"
                                                                disabled
                                                                rows={"10"}
                                                            >
                                                                {queryDetails.description}
                                                            </textarea>
                                                        </div>
                                                    </div>

                                                    <div className="row g-3" style={{ marginTop: "30px" }}>
                                                        <div className="col">
                                                            <label htmlFor="description">Message</label>
                                                            <input type="text"
                                                                className="form-control"
                                                                name="feedback"
                                                                id="feedback"
                                                            />
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
                                    <div className="col-12">

                                        <div className="card">
                                            <div className="card-body">
                                                <ul className="list-group list-group-flush">
                                                    <h6>Comments</h6>


                                                    {
                                                        queryDetails.comments && queryDetails.comments.map((curEle) => {
                                                            return (
                                                                <li className="list-group-item d-flex justify-content-between align-items-start">
                                                                    <div className="ms-2 me-auto">
                                                                        <div className="fw-bold">
                                                                            <AiOutlineComment style={{ fontSize: "21px" }} />
                                                                            &nbsp;&nbsp;
                                                                            <strong>
                                                                                {curEle.email}
                                                                            </strong>
                                                                        </div>
                                                                        {curEle.feedback}
                                                                    </div>
                                                                </li>
                                                            )
                                                        })
                                                    }


                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <h5>Loading</h5>
                    )}
                </div>
            </div>
        </>
    );
};

export default UpdateQuery;
