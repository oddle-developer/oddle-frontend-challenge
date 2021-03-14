import React from "react";
import { connect } from "react-redux";

const SearchResults = ({ user }) => {
  return (
    <div className="container">
      <div className="mx-auto" style={{ width: "200px" }}>
        <div className="card" style={{ width: "18rem" }}>
          <img src={user.avatar_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{user.login}</h5>

            <button
              onClick={() => console.log("take me to the next page")}
              className="btn btn-primary"
            >
              Go somewhere
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user }) => ({
  user,
});

export default connect(mapStateToProps)(SearchResults);
