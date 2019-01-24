import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { connect } from "react-redux";
import Game from "./Game";
import Button from "./Button";
import {
  questionAnswer,
  changeQuestion,
  submit,
  initQuestions
} from "./redux/actions";
import $ from "jquery";

//en los componenetes siempre usamos JSX
class App extends Component {
  /***************************************************************************************************** */
  /*         https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=75bce630e75b90e53711            */
  /***************************************************************************************************** */
  constructor(props) {
    super(props);
    this.state = {
      minutes: 2,
      seconds: 0,
      millis: 0,
      running: false,
      resultado: "",
      tips: []
    };
    this._handleStartClick = this._handleStartClick.bind(this);
    this._handleStopClick = this._handleStopClick.bind(this);
    //this._handleResetClick = this._handleResetClick.bind(this);
  }

  _handleStartClick() {
    if (!this.state.running) {
      this.interval = setInterval(() => {
        this.tick();
      }, 100);
      this.setState({ running: true });
    }
  }
  _handleStopClick() {
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({ running: false });
    }
  }

  tick() {
    let millis = this.state.millis - 1;
    let seconds = this.state.seconds;
    let minutes = this.state.minutes;

    if (millis === -1) {
      millis = 9;
      seconds = seconds - 1;
    }
    if (seconds === -1) {
      millis = 9;
      seconds = 59;
      minutes = minutes - 1;
    }
    if (minutes === 0 && seconds === 0 && millis === 0) {
      this.submitButton();
    }
    this.setState({
      millis: millis,
      seconds: seconds,
      minutes: minutes
    });
  }
  /* CON AJAX */
  componentDidMount() {
    $.ajax({
      url:
        "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=75bce630e75b90e53711",
      success: data => {
        this.props.dispatch(initQuestions(data));
      }
    });
    this._handleStartClick();
  }
  /* DOCUMENTACION REACT */

  /*async componentDidMount() {
    const response = await fetch(
      "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=75bce630e75b90e53711"
    );
    const json = await response.json();
    if(json.length === 0){
      return
    }
    this.props.dispatch(initQuestions(json));
  }*/

  /* PROMESAS */

  /*componentWillMount() {
    this.renderMyData();
  }

  renderMyData() {
    fetch(
      "https://quiz2019.herokuapp.com/api/quizzes/random10wa?token=75bce630e75b90e53711"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.props.dispatch(initQuestions(responseJson));
      })
      .catch(error => {
        console.error(error);
      });
  }
  */

  nextQuestion = () => {
    this.state.tips = [];

    if (this.props.finished === true) {
      alert(
        "you have finished, press reset to start again with another random quizzes"
      );
      return;
    }

    if (this.props.currentQuestion === 9) {
      this.props.dispatch(changeQuestion(0));
      return;
    } else {
      this.props.dispatch(changeQuestion(this.props.currentQuestion + 1));
    }
  };

  returnQuestion = () => {
    this.state.tips = [];

    if (this.props.finished === true) {
      alert(
        "you have finished, press reset to start again with another random quizzes"
      );
      return;
    }

    if (this.props.currentQuestion === 0) {
      this.props.dispatch(changeQuestion(9));
      return;
    } else {
      this.props.dispatch(changeQuestion(this.props.currentQuestion - 1));
    }
  };

  submitButton = () => {
    this._handleStopClick();

    if (this.props.finished === true) {
      alert(
        "you have finished, press reset to start again with another random quizzes"
      );
      return;
    }
    this.props.dispatch(submit(this.props.questions));
  };
  resetButton = () => {
    this.setState({
      minutes: 2,
      seconds: 0,
      millis: 0
    });
    this.setState({ resultado: "" });
    this.componentDidMount();
    this.props.dispatch(changeQuestion(0));
    alert("you have reseted the quizzes");
  };

  render() {
    {
      /*no hay preguntas questios.isEmpty()=true}*/
    }
    if (this.props.questions.length === 0) {
      alert("Questions is empty, there are no questions");
      return null;
    }
    {
      /*para que la App no reviente cuando sea una imagen vacia */
    }
    if (
      this.props.questions[this.props.currentQuestion].attachment.mime === "" ||
      this.props.questions[this.props.currentQuestion].attachment.mime ===
        "image/gif"
    ) {
      this.props.questions[this.props.currentQuestion].attachment.url = "";
    }

    if (this.props.finished === true) {
      this.state.resultado = (
        <div className="resScore">
          <h2>Your final SCORE: {(this.props.score / 10) * 100}%</h2>
          <div className="resFinished">
            You have finished [ {String(this.props.finished)} ] so reset if you
            want to start the game again
          </div>
        </div>
      );
    }

    return (
      <div className="App">
        <h1 className="Titulo">Quiz 2018/2019</h1>
        {/*aqui se muestran la question y la entrada de texto*/}
        <Game
          texto={this.props.currentQuestion}
          question={this.props.questions[this.props.currentQuestion]}
          onQuestionAnswer={answer => {
            this.props.dispatch(
              questionAnswer(this.props.currentQuestion, answer)
            );
          }}
        />
        {/*aqui se muestran los tips*/}
        {/*la imagen*/}
        <div className="centro">
          <img
            className="imagen"
            src={
              this.props.questions[this.props.currentQuestion].attachment.url
            }
            width="400"
            height="300"
          />
          <div className="tips">
            {this.props.questions[this.props.currentQuestion].tips.map(
              (tip, idx) => {
                this.state.tips[idx] = tip;
                return;
              }
            )}

            <p className="tipText">
              <u>Tips:</u>
            </p>
            <ul className="cadaTip">
              {this.state.tips.map(smt => (
                <li>{smt}</li>
              ))}
            </ul>
          </div>
          <div className="display">
            <div className="numbers">
              <span className="mins">{this.state.minutes}:</span>
              <span className="secs">{this.state.seconds}</span>
              <span className="millis">.{this.state.millis}</span>
            </div>
          </div>
        </div>

        <div className="clear" />
        <div>
          {/*aara mostrar la score*/}
          {/*<Submit score={this.state.cuentaF} finished={this.state.finalizado} />*/}
          {this.state.resultado}
          <div className="clear" />
          <div className="botones">
            {/*aqui se muestran los tres botones con sus acciones*/}
            <Button
              css="anterior"
              onclick={this.returnQuestion}
              boton="Anterior"
            />
            <Button
              css="confirmar"
              onclick={this.submitButton}
              boton="Obtener resultados"
            />
            <Button
              css="siguiente"
              onclick={this.nextQuestion}
              boton="Siguiente"
            />
            <Button css="reset" onclick={this.resetButton} boton="Reset" />
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    ...state
  };
}

export default connect(mapStateToProps)(App);
