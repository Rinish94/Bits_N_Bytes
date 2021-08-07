import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/Home";
import { PrivateRoute } from "./PrivateRoutes";
import CreateAlbum from "../Components/Profile/CreateAlbum";
import Artist_Profile from "../Pages/Home/Artist_Profile";
import Guest from "../Pages/Home/Guest";


const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/guest">
          <Guest/>
        </Route>
        <PrivateRoute exact={true} path="/profile">
          <Artist_Profile />
        </PrivateRoute>
        <PrivateRoute exact={true} path="/profile/create_album">
          <CreateAlbum/>
        </PrivateRoute>
      </Switch>
    </div>
  );
};

export { Routes };