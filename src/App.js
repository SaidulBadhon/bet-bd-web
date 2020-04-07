import './App.css';

import React, {Component, useState} from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import Header from "./Data/Components/Header/Header.js"
import Footer from "./Data/Components/Footer/Footer.js"

import Home from "./Data/Pages/Home/Home.js"

import Blog from "./Data/Pages/Blog/Blog";
import About from "./Data/Pages/About/About";

import LogIn from "./Data/Pages/LogIn/LogIn.js"
import SingUp from "./Data/Pages/SingUp/SingUp.js"

import PageNotFound from "./Data/PageNotFound/PageNotFound.js"


function App() {
  const [pageNotFound, setPageNotFound] = useState(false);

  const PageNotFoundHandler = () => {
      setPageNotFound(true);
  };

  return (
    <div className="App">
    { pageNotFound ? <div> </div> :
      <Header curUserName={"Saidul Badhon"} curBalance={5000.00} />}
            <Router>
              <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Blog" component={Blog} />
                  <Route exact path="/About" component={About} />
                  <Route exact path="/LogIn" component={LogIn} />
                  <Route exact path="/SingUp" component={SingUp} />
                  <Route exact path="/404" component={() => <PageNotFound PageNotFoundHandler={PageNotFoundHandler}/>} />
                  <Redirect to="404" />
              </Switch>
          </Router>
          { pageNotFound ? <div> </div> :
      <Footer />}
    </div>
  );
}

export default App;
