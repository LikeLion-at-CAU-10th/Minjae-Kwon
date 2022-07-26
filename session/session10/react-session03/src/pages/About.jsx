import React from "react";
import { Outlet } from "react-router-dom";
import UserNavBar from "../components/UserNavBar";

function About() {
  return (
    <>
      <div>About</div>
      <UserNavBar />
      <Outlet />
    </>
  );
}

export default About;
