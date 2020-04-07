import React, { Fragment } from "react";
import "./BetNow.css";

import { Typography, Button, IconButton } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

const BetNow = (props) => {
  return (
    <Fragment>
      {props.visible ? (
        <div className="BetNow" onClick={props.HideBetNow}>
          <div className="BetNowMain">
            <div className="Header">
              <div className="CloseButton">
                <IconButton>
                  <FontAwesomeIcon
                    icon={faTimesCircle}
                    color="rgb(250,250,250)"
                    onClick={props.HideBetNow}
                  />
                </IconButton>
              </div>
            </div>

            <div className="Body">
              <div className="Background">
                <img src={props.Bacground} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="DisplayNone"></div>
      )}
    </Fragment>
  );
};

export default BetNow;
