import React, { Component, Fragment } from "react";
import "./Toolbar.css";

import { Typography } from "@material-ui/core";

import StarIcon from "../../../Assets/Images/Home/Toolbar/StarIcon.svg";
import FootballIcon from "../../../Assets/Images/Home/Toolbar/FootballIcon.svg";
import CricketBallIcon from "../../../Assets/Images/Home/Toolbar/CricketBallIcon.png";
import HockeyIcon from "../../../Assets/Images/Home/Toolbar/HockeyIcon.svg";
import TennisIcon from "../../../Assets/Images/Home/Toolbar/TennisIcon.svg";
import Basketball from "../../../Assets/Images/Home/Toolbar/Basketball.svg";

function Toolbar() {
  return (
    <Fragment>
      <div className="Contener-Main">
        <div className="Toolbar">
          <div className="Logo">
            <img style={{ width: "30px" }} src={StarIcon} />
          </div>
          <div className="LogoText">
            <Typography variant="h6">All</Typography>
          </div>
        </div>

        <div className="Toolbar">
          <div className="Logo">
            <img
              style={{ width: "30px", marginTop: "2px" }}
              src={FootballIcon}
            />
          </div>
          <div className="LogoText">
            <Typography variant="h6">Football</Typography>
          </div>
        </div>

        <div className="Toolbar">
          <div className="Logo">
            <img
              style={{ width: "30px", marginTop: "2px" }}
              src={CricketBallIcon}
            />
          </div>
          <div className="LogoText">
            <Typography variant="h6">Cricket</Typography>
          </div>
        </div>

        <div className="Toolbar">
          <div className="Logo">
            <img style={{ width: "25px", marginTop: "5px" }} src={HockeyIcon} />
          </div>
          <div className="LogoText">
            <Typography variant="h6">Hockey</Typography>
          </div>
        </div>

        <div className="Toolbar">
          <div className="Logo">
            <img style={{ width: "30px", marginTop: "2px" }} src={TennisIcon} />
          </div>
          <div className="LogoText">
            <Typography variant="h6">Tennis</Typography>
          </div>
        </div>

        <div className="Toolbar">
          <div className="Logo">
            <img style={{ width: "30px", marginTop: "2px" }} src={Basketball} />
          </div>
          <div className="LogoText">
            <Typography variant="h6">Busketball</Typography>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Toolbar;
