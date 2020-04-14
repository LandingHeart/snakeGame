import React from "react";
import Login from "./Login";
import Register from "./Register";
import { Route } from "react-router-dom";
import Layout from "./Layout";

export default function Routes() {
  return (
    <div>
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/game" component={Layout}></Route>
      <Route exact path="/register" component={Register}></Route>
    </div>
  );
}
