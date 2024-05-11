import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getquery } from '../services/api';
import TopBar from '../Elements/TopBar';
import Sidebar from '../Elements/Sidebar';
const ResolvedQuery = () => {

    toast.configure();
    const navigate = useNavigate();

    const token = useSelector((state) => state.reducer.token);
    let [searchParams, setSearchParams] = useSearchParams();
    let queryId = searchParams.get("id");

    const [state, setState] = useState({
        isLoading: false,
        queryDetails: {}
    })


    const getCurrentQuery = async () => {
        setState({ ...state, isLoading: true })
        const res = await getquery(token, queryId);
        setState({ ...state, isLoading: false, queryDetails: res.data });
    }

    useEffect(() => {
        getCurrentQuery();
    }, [])


    const { isLoading, queryDetails } = state;

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
                                                    <form className="forms-sample">
                                                        <div className="row g-3" style={{ marginTop: "30px" }}>
                                                            <div className="col">
                                                                <label for="postType" class="form-label">Query Type</label>
                                                                <select id="postType" name="postType"
                                                                    class="form-control" required>

                                                                    {
                                                                        queryDetails.type == "academic"
                                                                            ? (
                                                                                <>
                                                                                    <option selected value="academic">Academic</option>
                                                                                </>
                                                                            )
                                                                            : queryDetails.type == "service" ? (
                                                                                <>
                                                                                    <option selected value="service">Service</option>
                                                                                </>
                                                                            ) : (
                                                                                <>
                                                                                    <option selected value="disciplinary">Disciplinary</option>
                                                                                </>
                                                                            )
                                                                    }


                                                                </select>
                                                            </div>
                                                        </div>

                                                        <div className="row g-3" style={{ marginTop: "30px" }}>
                                                            <div className="col">
                                                                <label htmlFor="description">Query</label>
                                                                <textarea className="form-control" name="description" id="description" disabled rows={"10"}>{queryDetails.description}</textarea>
                                                            </div>
                                                        </div>

                                                        <div className="row g-3" style={{ marginTop: "30px" }}>
                                                            <div className="col">
                                                                <label htmlFor="description">Feedback</label>
                                                                <textarea className="form-control" name="feedback" id="feedback" disabled rows={"10"}>{queryDetails.Feedback}</textarea>
                                                            </div>
                                                        </div>

                                                    </form>
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

export default ResolvedQuery