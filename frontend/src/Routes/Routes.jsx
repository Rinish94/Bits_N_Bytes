import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Components/Home/Home";
// import { PrivateRoute } from "./PrivateRoutes";
import UploadBooks from "../Components/Profile/UploadBooks";
import Profile from "../Components/Profile/Profile";
import BookList from "../Components/BookList/BookList";
import Navbar from "../Components/Navbar/Navbar";

const Routes = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/BookList">
          <BookList />
        </Route>
        <Route exact={true} path="/profile">
          <Profile />
        </Route>
        <Route exact={true} path="/profile/UploadBooks">
          <UploadBooks />
        </Route>
      </Switch>
    </div>
  );
};

export { Routes };
