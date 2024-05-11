import React, { useEffect, useState } from 'react'
import { deletePost, getAllpost } from '../services/api'
import TopBar from '../Elements/TopBar'
import Sidebar from '../Elements/Sidebar'
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

import { AiFillDelete } from "react-icons/ai";
import { useNavigate, useSearchParams } from 'react-router-dom';


const ManageResource = () => {

    const { userType } = useSelector((state) => state.reducer.user);

    const navigate = useNavigate();

    const [resourceFor, setResourceFor] = useState(1)

    const [state, setState] = useState({
        isLoading: false,
        list: []
    })
    const fetchAllPosts = async () => {
        setState({ ...state, isLoading: true })
        const res = await getAllpost();

        const data = res.data

        const result = data.filter((ele) => {
            return ele.postFor == resourceFor
        });


        setState({ ...state, isLoading: false, list: result })
    }


    const deleteP = async (id) => {

        const res = await deletePost(id);


        if (res.status === 200) {
            toast.success('Post Deleted', {
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
        fetchAllPosts();
    }, [])

    useEffect(() => {
        fetchAllPosts();
    }, [resourceFor])

    const { isLoading, list } = state;

    return (
        <div className="container-scroller">

            <TopBar />

            <div className="container-fluid page-body-wrapper" >
                <Sidebar />
                <div className="main-panel">
                    <div className="content-wrapper row d-flex align-items-start justify-content-start">

                        <div className="row">
                            <div className="col">
                                <select onChange={(e) => { setResourceFor(e.target.value) }} id="postFor" name="postFor"
                                    class="form-control" required>
                                    <option value="1">1st Year</option>
                                    <option value="2">2nd Year</option>
                                    <option value="3">3rd Year</option>
                                    <option value="4">4th Year</option>
                                    <option value="5">Placement</option>
                                    <option value="6">GATE</option>
                                </select>
                            </div>
                        </div>

                        <div className="row">

                            {
                                isLoading === false ? (

                                    list.length > 0 && list.map((curList) => {

                                        return (

                                            <div className="col-4 mx-5 my-3 ">

                                                <div className="card  position-relative" >
                                                    <img src={`http://localhost:6001/assets/${curList.picturePath}`} class="card-img-top" style={{ width: "100%" }} alt="..." />
                                                    <span class="position-absolute top-0 start-100 badge rounded-pill bg-danger" >
                                                        {curList.postType == 1 ? "Event" : curList.postType == 2 ? "Internship" : curList.postType == 3 ? "Blog" : "Other"}
                                                    </span>
                                                    <div className="card-body">
                                                        <h4 className="card-title text-start ">{curList.title}</h4>
                                                        <p className="card-description">
                                                            {curList.description}
                                                        </p>

                                                        {
                                                            userType == 0
                                                                ? (
                                                                    <button onClick={() => { deleteP(curList._id) }} className='text-xl' >
                                                                        <AiFillDelete />
                                                                    </button>
                                                                )
                                                                : ""
                                                        }


                                                    </div>
                                                </div>
                                            </div>


                                        )

                                    })

                                ) : (
                                   ""
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ManageResource