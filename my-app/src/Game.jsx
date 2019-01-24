import React from "react"; //imrc
export default class Game extends React.Component {
  //cc
  render() {
    return (
      <div>
        <h2 className="texto"> Question {this.props.texto}</h2>
        <h3>{this.props.question.question}</h3>
        <div>
          <input
            className="cajetin"
            type="text"
            value={this.props.question.userAnswer || ""}
            placeholder=" Type here your answer"
            onChange={e => {
              this.props.onQuestionAnswer(e.target.value);
            }}
          />
        </div>
      </div>
    );
  }
}
