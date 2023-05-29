import React from "react";
import Banner1 from "../../assets/bannerhome01.png";
import Banner2 from "../../assets/bannerhome02.png";
import { Link } from "react-router-dom";

function BannersHome() {
  return (
    <div className=" bg-bege-100">
      <div className="w-10/12 gap-4 m-auto py-14 flex flex-col md:flex-row">
        <div>
          <Link to={"/personalize"}>
            <img src={Banner1} alt="" />
          </Link>
        </div>
        <div>
          <Link to={"/catalogo"}>
            <img src={Banner2} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannersHome;
