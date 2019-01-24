import React from "react"; //imrc
export default class Submit extends React.Component {
  //cc
  render() {
    return (
      <div>
        Your current score: {this.props.score}
        <div>This question has been solved: {String(this.props.finished)}</div>
      </div>
    );
  }
}
