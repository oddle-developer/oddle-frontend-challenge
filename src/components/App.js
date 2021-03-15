import React from "react";
import SearchBarContainer from "./Search/SearchBarContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchResults from "./Search/SearchResults";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.scss";
const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route path="/user/:username" component={SearchResults} />
                  <Route path="/">
                    <SearchBarContainer />
                  </Route>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </BrowserRouter>
    </div>
  );
};

export default App;
