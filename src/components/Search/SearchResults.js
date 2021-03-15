import React from "react";
import Repos from "../User/Repos";
import Followers from "../User/Followers";
import Following from "../User/Follwoing";
import { connect } from "react-redux";
import "./search.scss";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";

const SearchResults = ({ user }) => {
  let match = useRouteMatch();
  return (
    <div className="container">
      <div className="container">
        <div className="row align-middle margin10">
          <div className="col-xs-6">
            <div className="well">
              <img src={user.avatar_url} className="search-avatar" alt="..." />
              <div>{user.login}</div>
            </div>
          </div>
          <div className="col-xs-6">
            <div className="well">
              <div>
                <Link to={`${match.url}/repos`}>
                  Public repos :{user.public_repos}
                </Link>
              </div>
              <div>
                <Link to={`${match.url}/followers`}>
                  Followers :{user.followers}
                </Link>
              </div>
              <div>
                <Link to={`${match.url}/following`}>
                  Following :{user.following}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      {/**Mode display below */}
      <Switch>
        <Route path={`${match.path}/repos`} component={Repos} />
        <Route path={`${match.path}/following`} component={Following} />
        <Route path={`${match.path}/followers`} component={Followers} />
      </Switch>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(SearchResults);
