import React, { Component, Fragment } from "react"
import "./LogIn.css";

import { Button, TextField, Typography } from "@material-ui/core/";

const LogIn = (props) => {
  const OnSubmit = (gol) => {
    console.log("GOL " + gol)
  }

  return (
    <Fragment>
      <div className="LogInForm">
        <div className="BaseContainer">
          <div className="content">
            <Typography className="FormHeader" component="h5" variant="h5">
              Log In.
            </Typography>


            <form onSubmit={OnSubmit}>


              <div className="FormFields">

                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />

                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="password"
                  label="Password"
                  name="password"
                  autoComplete="password"
                />

              </div>

              <div className="RememberMe-Text">
                <input type="checkbox" id="Remember" name="Remember" value="Remember" />
                <label className="RememberMe-Lable" for="Remember"><Typography>Remember Me</Typography> </label><br></br>
              </div>

              <div className="Ref-Text">
                <Typography> Don't have an account ? <a className="Ref-Text-A" href="/Singup">Click Here !</a></Typography>
              </div>

              <Button
                className="FormButton"
                type="submit"

                variant="contained"
                color="secondary" >
                Log In
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default LogIn
