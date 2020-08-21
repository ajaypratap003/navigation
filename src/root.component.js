import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./app/Introduction/Dashboard";

export default function Root(props) {
  return (
    <BrowserRouter>
      <Route path="/navigation" component={Dashboard} exact />
    </BrowserRouter>
  );
}
