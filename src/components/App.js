import React from "react";
import SearchBarContainer from "./Search/SearchBarContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/">
            <SearchBarContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
