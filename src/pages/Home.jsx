import React, { useEffect, useState } from "react";

import { useContext } from "../context/Context";

import customAxios from "../service/axios";
import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import Rightbar from "../components/Rightbar/Rightbar";
import { Link } from "react-router-dom";

export default function Home() {
  const { rightbarOpen } = useContext();
  return (
    <div className="container">
      <Link to={"/temp"}>Temp</Link>
      <div className={rightbarOpen ? "bar_wrapper open" : "bar_wrapper"}>
        <Rightbar />
      </div>
    </div>
  );
}
