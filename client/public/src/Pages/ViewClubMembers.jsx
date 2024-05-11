import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getAllpost, getClub, joinclub } from '../services/api'
import TopBar from '../Elements/TopBar';
import Sidebar from '../Elements/Sidebar';
const ViewClubMembers = () => {

    const { _id, picturePath, firstName, email } = useSelector((state) => state.reducer.user);

    let [searchParams, setSearchParams] = useSearchParams();
    let clubId = searchParams.get("id");

    const navigate = useNavigate();

    const token = useSelector((state) => state.reducer.token);

    const [joined, setJoined] = useState(true)

    const [state, setState] = useState({
        isLoading: false,
        clubDetails: []
    })
    const fetchClub = async () => {
        setState({ ...state, isLoading: true })
        const res = await getClub(token, clubId);
        console.log(res.data);
        setState({ ...state, isLoading: false, clubDetails: res.data })
    }


    useEffect(() => {
        fetchClub();
    }, [])

    const callJoinClub = async (clubId) => {

        const user = {
            userId: _id,
            picturePath: picturePath,
            email: email,
            firstName: firstName
        }
        console.log(user);

        const res = await joinclub(token, user, clubId);

        if (res.status == 200) {
            navigate("/manage-club")
        }

    }


    const { isLoading, clubDetails } = state;

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

                                    <>

                                        <div className="col-12">
                                            <div className="card-body">
                                                <h4 className="card-title text-start ">{clubDetails.name}</h4>
                                                <p className="card-description">
                                                    {/* {curList.description} */}
                                                    <button
                                                        onClick={() => { callJoinClub(clubId) }}
                                                        className='btn btn-success' >Join</button>


                                                </p>

                                            </div>
                                        </div>

                                        {
                                            Object.keys(clubDetails).length > 0 && clubDetails.participants.map((curUser) => {

                                                return (

                                                    <>
                                                        <div className="col-3 mx-5 my-3 ">

                                                            <div className="card  position-relative">
                                                                <img src={`http://localhost:6001/assets/${curUser.picturePath}`} class="card-img-top" style={{ width: "100%" }} alt="..." />
                                                                <div className="card-body">
                                                                    <h4 className="card-title text-start ">{curUser.firstName}</h4>
                                                                    <p className="card-description">
                                                                        {curUser.email}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </>

                                                )

                                            })
                                        }

                                    </>



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

export default ViewClubMembers