import { HashRouter, Route, Switch } from "react-router-dom";
import TopNav from './components/TopNav';
import "@patternfly/react-core/dist/styles/base.css";
import React from "react";

const App = () => (
  <div style={{ backgroundColor: 'black', height: '100vh' }}>
    <HashRouter>
      <Switch>
        <Route
          path="/"
          component={TopNav}
        />
      </Switch>
    </HashRouter>
  </div>
);

export default App;
