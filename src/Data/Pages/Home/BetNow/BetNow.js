import React, { Fragment, useState } from "react";
import "./BetNow.css";

import { Typography, Button, IconButton } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faTimesCircle, faCalendarAlt,
  faClock,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";


const BetNow = (props) => {

  const [selectedAmount, setSelectedAmount] = useState(0);



  function selectedAmountHandler(selectedItem) {

    setSelectedAmount(selectedItem);
  }

  return (
    <Fragment>
      {props.visible ? (
        <div className="BetNow">
          <div className="BetNowMain">

            <div className="Header">
              <div className="CloseButton">
                <IconButton>
                  <FontAwesomeIcon icon={faTimesCircle} color="rgba(230, 230, 230, 1)" onClick={props.HideBetNow} />
                </IconButton>
              </div>
            </div>

            <div className="Body">


              <div className="TeamsVersus">
                <div className="Team1">
                  <img style={{ width: "75px", height: "75px", maxHeight: "75px" }} src={props.team1Img} alt="Team 1 Image" />

                  <Typography className="BetNow-TeamNameText" variant="subtitle2">
                    {props.team1Name}
                  </Typography>
                </div>


                <div className="vs">
                  <Typography variant="h3" className="title" style={{ fontWeight: 500, color: "rgba(256,256,256, .5)", marginTop: "25px" }}>
                    vs
                  </Typography>
                </div>
                <div className="Team2">
                  <img style={{ width: "75px", height: "75px", maxHeight: "75px" }} src={props.team2Img} alt="Team 2 Image" />
                  <Typography className="BetNow-TeamNameText" variant="subtitle2">
                    {props.team2Name}
                  </Typography>
                </div>



              </div>


              <div className="BetNow-Data">

                <div className="Data">
                  <Typography variant="subtitle2" style={{ color: "rgba(230, 230, 230, 1)" }}>
                    <FontAwesomeIcon
                      style={{ color: "rgba(206, 206, 206, .75)" }}
                      icon={faCalendarAlt}
                    />
            &nbsp; {props.date}&nbsp;&nbsp;
            <FontAwesomeIcon
                      style={{ color: "rgba(206, 206, 206, .75)" }}
                      icon={faClock}
                    />{" "}
                    {props.time}&nbsp;&nbsp;&nbsp;&nbsp;
            {props.isLive ? (
                      <FontAwesomeIcon
                        style={{ color: "rgba(20, 220, 00, 1)" }}
                        size="xs"
                        icon={faCircle}
                      />
                    ) : (
                        <FontAwesomeIcon
                          style={{ color: "rgba(220, 20, 00, 1)" }}
                          size="xs"
                          icon={faCircle}
                        />
                      )}{" "}
                    {props.liveState}
                  </Typography>

                </div>


                <div className="Data2">
                  <Typography variant="subtitle2">
                    Select how much money you want to bit and select a team that you think will win and you can earn up to 200%.
                    </Typography>
                </div>

                <div className="Data3">
                  <div className="AmmountBar">
                    <Button className="AmmountButton" onClick={() => { selectedAmountHandler(50); }} > 50৳ </Button>
                    <Button className="AmmountButton" onClick={() => { selectedAmountHandler(100); }} > 100৳ </Button>
                    <Button className="AmmountButton" onClick={() => { selectedAmountHandler(200); }} > 200৳ </Button>
                    <Button className="AmmountButton" onClick={() => { selectedAmountHandler(500); }} > 500৳ </Button>
                    <Button className="AmmountButton" onClick={() => { selectedAmountHandler(1000) }} > 1000৳ </Button>

                  </div>
                </div>

                <div className="Data4">

                  <Typography variant="subtitle2">
                    Total Stake : {selectedAmount} ৳
                  </Typography>

                  <Typography variant="subtitle2">
                    Possible Winning (upto) : {selectedAmount * 2} ৳
                  </Typography>

                  <Typography variant="subtitle2">
                    Current Balance : {props.curBalance} ৳
                  </Typography>
                </div>

                <div className="Data5">

                  <Button className="TeamButton" variant="contained" color="primary" onClick={() => { props.updateCurBalance(selectedAmount) }} >{props.team1Name}</Button>
                  <Button className="TeamButton" variant="contained" color="secondary" onClick={() => { props.updateCurBalance(selectedAmount) }} >{props.team2Name}</Button>


                </div>





              </div>






            </div>



            <div className="Background">
              <img src={props.background} />
              <div className="imgCutter"></div>
            </div>


          </div>
        </div>
      ) : (
          <div className="DisplayNone"></div>
        )
      }
    </Fragment >
  );
};

export default BetNow;
