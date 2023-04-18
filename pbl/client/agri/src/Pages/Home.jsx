import React, { useEffect, useState } from "react";
import "./Home.css";

import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


export default function Home() {
  const [search, setSearch] = useState("");
  const [searchdata, setSearchdata] = useState([]);
  
  const handelSearch = async () => {
    try {
      const res = await axios.post("");
      setSearchdata(res.data);
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="search-div">
        <input
          className="home-search-box"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button onClick={handelSearch}>SEARCH</button>
      </div>

      <div className="main-div">
        <div className="cards one">
          <Link to="/fruits">
            <h2>Fruits</h2>
          </Link>
        </div>

        <div className="cards second">
          <Link to="/vegetables">
            <h2>Vegetables</h2>
          </Link>
        </div>
        {/* <div className="cards third">
        <Link to="/market"><h4>Market</h4></Link>
    </div> */}
      </div>

   
    </>
  );
}
