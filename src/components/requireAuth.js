import React, { Component } from "react";
import { connect } from "react-redux";

export const requireAuth = (ChildComponent) => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    // when receiving a new state of props
    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      if (!this.props.auth) {
        this.props.history.push("/");
      }
    }
    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = (state) => {
    return {
      auth: state.auth,
    };
  };
  return connect(mapStateToProps)(ComposedComponent);
};
