import React, { Component } from "react"
import "./Footer.css"


import facebookLogo from "./img/facebook.png"
import linkedInLogo from "./img/linkedIn.png"
import twitterLogo from "./img/twitter.png"

function Footer() {
  return (
    <div className="Footer">
      <div className="Contener">

        <div className="Text-Files">
          <h3>Copyright © 2020 by <a href="techsecbd.com"> Saidul Badhon</a>, All rights reserved </h3>
        </div>

        <div className="Logos">

          <div className="aButton">
            <img src={facebookLogo} alt="facebooklogo" onClick={() => alert("HI")} />
          </div>

          <div className="aButton">
            <img src={twitterLogo} alt="twitterLogo" onClick={() => alert("HI2")} />
          </div>

          <div className="aButton">
            <img src={linkedInLogo} alt="linkedInLogo" onClick={() => alert("HI3")} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
