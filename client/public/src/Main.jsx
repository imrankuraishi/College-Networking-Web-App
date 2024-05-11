import React from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import AddPost from "./Pages/AddPost";
import ManagePost from "./Pages/ManagePost";
import AllPosts from "./Pages/AllPosts";
import AddQuery from "./Pages/AddQuery";
import ManageQuery from "./Pages/ManageQuery";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import AddClub from "./Pages/AddClub";
import ManageClub from "./Pages/ManageClub";
import AllStudents from "./Pages/AllStudents";
import AllTeachers from "./Pages/AllTeachers";
import { useSelector } from "react-redux";
import UpdateQuery from "./Pages/UpdateQuery";
import ResolvedQuery from "./Pages/ResolvedQuery";
import ViewClubMembers from "./Pages/ViewClubMembers";
import ManageContact from "./Pages/ManageContact";
import ManageResource from "./Pages/ManageResouce";

const Main = () => {
  const isAuth = Boolean(useSelector((state) => state.reducer.token));


  return (
    <>



      <Routes>

        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Registration />} />


        <Route
          path="/allposts"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <AllPosts />
          }
        />

        <Route
          path="/students"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <AllStudents />
          }
        />


        <Route
          path="/teachers"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <AllTeachers />
          }
        />


        <Route
          path="/addpost"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <AddPost />
          }
        />
        <Route
          path="/manage-post"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <ManagePost />
          }
        />
        <Route
          path="/update-post"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <ManagePost />
          }
        />

        <Route
          path="/addquery"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <AddQuery />
          }
        />
        <Route
          path="/manage-query"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <ManageQuery />
          }
        />
        <Route
          path="/update-query"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <UpdateQuery />
          }
        />
        <Route
          path="/resolved-query"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <ResolvedQuery />
          }
        />

        <Route
          path="/addclub"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <AddClub />
          }
        />
        <Route
          path="/manage-club"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <ManageClub />
          }
        />
        <Route
          path="/view-club"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <ViewClubMembers />
          }
        />
        <Route
          path="/manage-contact"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <ManageContact />
          }
        />
        <Route
          path="/manage-resource"
          element={
            isAuth == false ? <Navigate to={"/"} /> : <ManageResource />
          }
        />
      </Routes>

    </>
  );
};

export default Main;