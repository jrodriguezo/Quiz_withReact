import React from "react";
export default class Button extends React.Component {
  render() {
    return (
      <button className={this.props.css} onClick={this.props.onclick}>
        {this.props.boton}
      </button>
    );
  }
}
