import React from "react";
import PaginatorList from "../Paginator/PaginatorList";
import { connect } from "react-redux";
import "./search.scss";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";

const SearchResults = ({ user }) => {
  let match = useRouteMatch();
  console.log("The match :", match);
  return (
    <div className="container">
      <img src={user.avatar_url} className="search-avatar" alt="..." />
      <div>{user.login}</div>
      <div>
        <Link to={`${match.url}/repos`}>Public repos :{user.public_repos}</Link>
      </div>
      <div>
        <Link to={`${match.url}/followers`}>Followers :{user.followers}</Link>
      </div>
      <div>
        <Link to={`${match.url}/following`}>Following :{user.following}</Link>
      </div>
      <hr />
      {/**Mode display below */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <PaginatorList />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(SearchResults);
