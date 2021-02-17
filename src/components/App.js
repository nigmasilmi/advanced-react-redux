import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeAuth } from "actions";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export class App extends Component {
  renderHeader() {
    return (
      <ul className="ui three item menu">
        <li className="item">
          <Link to="/">Home</Link>
        </li>
        <li className="item">
          <Link to="/post">Post a Comment</Link>
        </li>
        <li className="item">{this.renderButton()}</li>
      </ul>
    );
  }

  renderButton() {
    if (this.props.auth) {
      return (
        <button
          className="button primary"
          onClick={() => this.props.changeAuth(false)}
        >
          Sign Out
        </button>
      );
    } else {
      return (
        <button
          className="button primary"
          onClick={() => this.props.changeAuth(true)}
        >
          Sign In
        </button>
      );
    }
  }

  render() {
    return (
      <div className="ui container">
        {this.renderHeader()}
        <Route path="/" exact component={CommentList} />
        <Route path="/post" component={CommentBox} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { auth: state.auth };
};
export default connect(mapStateToProps, { changeAuth })(App);
