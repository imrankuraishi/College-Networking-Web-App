import React, { useEffect, useState } from 'react'
import { deletePost, getAllpost } from '../services/api'
import TopBar from '../Elements/TopBar'
import Sidebar from '../Elements/Sidebar'
import { useSelector } from "react-redux";
import { toast } from 'react-toastify';

import { AiFillDelete } from "react-icons/ai";
import { FaDownload } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const AllPosts = () => {

  const { userType } = useSelector((state) => state.reducer.user);

  const navigate = useNavigate();


  const [state, setState] = useState({
    isLoading: false,
    list: []
  })
  const fetchAllPosts = async () => {
    setState({ ...state, isLoading: true })
    const res = await getAllpost();
    setState({ ...state, isLoading: false, list: res.data })
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

  const { isLoading, list } = state;

  return (
    <div className="container-scroller">

      <TopBar />

      <div className="container-fluid page-body-wrapper" >
        <Sidebar />
        <div className="main-panel">
          <div className="content-wrapper row d-flex align-items-start justify-content-start">
            <div className="row">

              {
                isLoading === false ? (

                  list.length > 0 && list.map((curList) => {


                    const myArray = curList.picturePath.split(".")
                    let ext = myArray[myArray.length - 1];





                    return (

                      <div className="col-4 mx-5 my-3 ">

                        <div className="card  position-relative" >

                          {
                            ext == "pdf"
                              ? (
                                <a className='btn btn-primary mt-5 ms-3 w-max' href={`http://localhost:6001/assets/${curList.picturePath}`} target='_blank' >
                                  <FaDownload />
                                </a>
                              )
                              : (
                                <img src={`http://localhost:6001/assets/${curList.picturePath}`}
                                  className="card-img-top" style={{ width: "100%" }} alt="..." />

                              )
                          }


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
                  <h5>Loading</h5>
                )
              }
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default AllPosts