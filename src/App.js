import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import Destination from "./components/Destination/Destination";
import Header from "./components/Header/Header";
import Home from './components/Home/Home';
import Login from "./components/Login/Login";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const[selectVehicles, setSelectVehicles] = useState([])
  const[loggedInUser, setLoggedInUser] = useState([])

  const vehicleHandler = (vehicle) =>{
    let select = vehicle;
    setSelectVehicles(select);
  }

  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
      <div  className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/Home">
            <Home vehicleHandler={vehicleHandler}></Home>
          </Route>
          <Route exact path="/">
            <Home vehicleHandler={vehicleHandler}></Home>
          </Route>
          <PrivateRoute path="/Destination">
            <Destination selectVehicles={selectVehicles}></Destination>
          </PrivateRoute>
          <Route path="/Login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
