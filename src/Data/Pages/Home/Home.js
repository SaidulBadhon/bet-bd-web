import React, { Fragment } from "react";
import "./Home.css";

import Toolbar from "./Toolbar/Toolbar.js";
import LiveMatch from "./LiveMatch/LiveMatch.js";




function Home(props) {
  return (
    <Fragment>

      <div className="Home">
        <Toolbar />

        <div className="Home-Body">
          <LiveMatch />
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
