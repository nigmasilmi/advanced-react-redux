import React from "react";
import { connect } from "react-redux";
import { saveComment } from "actions";

class CommentBox extends React.Component {
  state = { comment: "" };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form className="ui form" onSubmit={this.handleSubmit}>
        <h4>Add comment</h4>
        <textarea
          className="ui field"
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

export default connect(null, { saveComment })(CommentBox);
