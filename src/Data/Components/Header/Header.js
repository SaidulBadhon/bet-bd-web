import React, { Component, Fragment } from "react";
import "./Header.css";

import { Typography, Button } from "@material-ui/core";

import { BrowserRouter as Router, Link } from "react-router-dom";

import logo from "../../Assets/Logo/LOGOCOLOR.png";

const Header = (props) => {
  return (
    <Fragment>
      <div className="Header">
        <div
          className="ClickableLogo"
          onClick={() => {
            window.location.replace("/");
          }}
        >
          <div className="Logo">
            <img src={logo} />
          </div>

          <Typography
            variant="subtitle2"
            className="title"
            style={{
              fontSize: "20px",
              fontWeight: 500,
              color: "rgba(0,0,0,.75)",
              paddingLeft: "15px",
              marginTop: "2px",
            }}
          >
            Bet BD
          </Typography>
        </div>

        <div className="NavBar">
          <div className="ButtonHolder">
            <Button
              onClick={() => {
                window.location.replace("/");
              }}
            >
              Home
            </Button>
            <Button
              onClick={() => {
                window.location.replace("/About");
              }}
            >
              About
            </Button>
            <Button
              onClick={() => {
                window.location.replace("/LiveMatch");
              }}
            >
              Live Matchs
            </Button>
            <Button
              onClick={() => {
                window.location.replace("/Balance");
              }}
            >
              Balance
            </Button>

            <Button
              onClick={() => {
                window.location.replace("/MyStatement");
              }}
            >
              My Statement
            </Button>

            <Button
              onClick={() => {
                props.IsLogedinHandler()
              }}
            >
              Log out
            </Button>
          </div>

          <div className="Profile">
            <div className="Data">
              <div className="UserName">
                <Typography variant="subtitle2">{props.curUserName}</Typography>
              </div>

              <div className="UserData">
                <Typography variant="subtitle2">
                  {props.curBalance} ৳
                </Typography>
              </div>
            </div>

            <div className="UserLogo">
              <img src="https://i.imgur.com/dPFXOKH.jpg" />
            </div>
          </div>
        </div>
      </div>

      <div className="Important-Notice" style={{ display: "none" }}>
        <marquee behavior="scroll" direction="left" scrollamount="5">
          👉 👉 Important Notice : COVID-19 Is A Danger Virus, So Please Stay
          Home. 👈 👈 &nbsp; &nbsp; Contact us : +8801620861542 &nbsp; &nbsp;
          Deposit Time : 10:00 AM to 12:00 AM. &nbsp; &nbsp; Withdraw Time :
          9:00 AM To 6:00 PM. &nbsp; &nbsp; Payment Settlement Time Minimum 3
          Hours And Maximum 24 Hours. &nbsp; &nbsp; Minimum Deposit Limit is
          300/= and Maximum Deposit Limit is 25,000/= &nbsp; &nbsp; Minimum
          Withdraw Limit is 500/= and Maximum Withdraw Limit is 10,000/= &nbsp;
          &nbsp; 👉 Thanks For Staying With Us 👈 &nbsp; &nbsp;
        </marquee>
      </div>
    </Fragment>
  );
};

export default Header;
