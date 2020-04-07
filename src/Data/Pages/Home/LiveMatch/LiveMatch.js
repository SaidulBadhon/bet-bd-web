import React, { Fragment } from "react";
import "./LiveMatch.css";

import { Typography } from "@material-ui/core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";

import LiveMatchData from "./LiveMatchData.js";
import LiveMatchContentLoader from "./LiveMatchContentLoader.js";

class LiveMatch extends React.Component {
  constructor() {
    super();
    this.state = {
      liveMatchs: LiveMatchData,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedLiveMatchs = prevState.liveMatchs.map((liveMatch) => {
        if (liveMatch.id === id) {
          return {
            ...liveMatch,
            completed: !liveMatch.completed,
          };
        }
        return liveMatch;
      });
      console.log(prevState.liveMatchs);
      console.log(updatedLiveMatchs);
      return {
        liveMatchs: updatedLiveMatchs,
      };
    });
  }

  render() {
    const liveMatchs = this.state.liveMatchs.map((item) => (
      <LiveMatchContentLoader
        key={item.id}
        item={item}
        handleChange={this.handleChange}
      />
    ));

    return (
      <Fragment>
        <div className="LiveMatch-Header">
          <FontAwesomeIcon
            icon={faRedoAlt}
            size="1x"
            color="#9fa0a2"
            style={{ paddingLeft: "25px", paddingTop: "2px" }}
          />
          <Typography
            variant="subtitle2"
            className="title"
            style={{
              fontSize: "14px",
              fontWeight: 500,
              color: "#9fa0a2",
              paddingLeft: "5px",
            }}
          >
            Live Matchs
          </Typography>
        </div>

        <div className="LiveMatch-Body">{liveMatchs}</div>
      </Fragment>
    );
  }
}

export default LiveMatch;
