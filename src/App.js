
import './App.css';
import React from "react";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Naslovna from "./Components/Naslovna"
import Meni from "./Components/Meni";
import Onama from "./Components/Onama";
import Merch from "./Components/Merch";
import Hnl from "./Components/Hnl.js";
import Header from "./Header.js";
import Footer from "./Footer.js";

function App() {
  return (
    <div className="App">
  <Header></Header>
       <Router>
        <Route exact path="/" component={Naslovna}></Route>
        <Route path="/Meni" component={Meni}></Route>
        <Route path="/Onama" component={Onama}></Route>
        <Route path="/Merch" component={Merch}></Route>
       <Route path="/Hnl" component={Hnl}></Route>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
