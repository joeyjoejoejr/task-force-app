import React from "react";
import TaskForceApp from "../components/TaskForceApp";
import Home from "../components/Home";
import TaskForceNew from "../components/TaskForce/New";
import { Router, Route, DefaultRoute } from "react-router";

export default (
  <Route name="app" path="/" handler={TaskForceApp}>
    <Route
      name="taskForceNew"
      path="task-force/new"
      handler={TaskForceNew} />
    <DefaultRoute handler={Home} />
  </Route>
);
