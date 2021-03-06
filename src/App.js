import React, { Component, useState } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Header from "./Data/Components/Header/Header.js"
import HeaderForNewUser from "./Data/Components/Header/HeaderForNewUser.js"
import Footer from "./Data/Components/Footer/Footer.js"

import Home from "./Data/Pages/Home/Home.js"

import Blog from "./Data/Pages/Blog/Blog";
import About from "./Data/Pages/About/About";

import LogIn from "./Data/Pages/LogIn/LogIn.js"
import SingUp from "./Data/Pages/SingUp/SingUp.js"

import PageNotFound from "./Data/PageNotFound/PageNotFound.js"
import { Button } from '@material-ui/core';
//import { login } from "./Server/Components/UserFunction.js"


function App() {

  const [isLogedIn, setIsLogedIn] = useState(true);

  const IsLogedinHandler = () => {


    setIsLogedIn(!isLogedIn);

  };



  const [pageNotFound, setPageNotFound] = useState(false);

  const PageNotFoundHandler = () => {
    setPageNotFound(true);
  };

  const [curBalance, setCurBalance] = useState(5000);

  console.log("Ammount" + curBalance);

  const updateCurBalance = (ammount) => {
    setCurBalance(curBalance - ammount)
  }




  //backgroundColor: "#F5F5F5" 

  return (
    <div style={{ textAlign: "center" }} >


      {
        pageNotFound ?
          <div></div>
          :
          (
            isLogedIn ?
              (<Header curUserName={"Saidul Badhon"} curBalance={curBalance} IsLogedinHandler={IsLogedinHandler} />)
              :
              (<HeaderForNewUser IsLogedinHandler={IsLogedinHandler} />)
          )
      }



      <Router>
        <Switch>
          <Route exact path="/" component={() => <Home PageNotFoundHandler={PageNotFoundHandler} curBalance={curBalance} updateCurBalance={updateCurBalance} />} />
          <Route exact path="/Blog" component={Blog} />
          <Route exact path="/About" component={About} />



          <Route exact path="/LogIn" component={() => <LogIn IsLogedinHandler={IsLogedinHandler} />} />
          <Route exact path="/SingUp" component={SingUp} />
          <Route exact path="/404" component={() => <PageNotFound PageNotFoundHandler={PageNotFoundHandler} />} />
          <Redirect to="404" />
        </Switch>
      </Router>
      {pageNotFound ? <div> </div> :
        <Footer />}

    </div>
  );
}

export default App;
