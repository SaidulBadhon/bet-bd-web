import React, { Component, Fragment } from "react"
import "./SingUp.css";

import { Button, TextField, Typography } from "@material-ui/core/";

const SingUp = (props) => {
  const OnSubmit = (gol) => {
    console.log("GOL " + gol)
  }
  return (
    <Fragment>
      <div className="SingUpForm">
        <div className="BaseContainer">
          <div className="content">
            <Typography className="FormHeader" component="h5" variant="h5">
              Sing Up.
            </Typography>


            <form onSubmit={OnSubmit}>


              <div className="FormFields">

                <div className="FirstAndLastName">
                  <TextField
                    className="TextField"

                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    name="firstname"
                    autoComplete="firstname"
                  />

                  <TextField
                    className="TextField"
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="lastname"
                  />
                </div>

                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                />


                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="number"
                  label="Phone Nummber"
                  name="number"
                  autoComplete="number"
                />

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

                <TextField
                  className="TextField"
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="confirmpassword"
                  label="Confirm Password"
                  name="confirmpassword"
                  autoComplete="confirmpassword"
                />

              </div>

              <div className="Ref-Text">
                <Typography> Already habe an account ? <a className="Ref-Text-A" href="/Login">Click Here !</a></Typography>
              </div>
              <Button
                className="FormButton"
                type="submit"

                variant="contained"
                color="secondary" >
                Register
              </Button>
            </form>
          </div>

        </div>
      </div>
    </Fragment>
  )
}

export default SingUp
