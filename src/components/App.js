import React from "react";
import SearchBarContainer from "./Search/SearchBarContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchResults from "./Search/SearchResults";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/user/:username">
            <SearchResults />
          </Route>
          <Route path="/">
            <SearchBarContainer />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
