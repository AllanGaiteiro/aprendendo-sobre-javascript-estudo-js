import React from 'react';
//import logo from './logo.svg';
//import './App.css';

class Painel extends React.Component {
  constructor(props){
    super(props)
    this.state = {text: ''}
  }  
  
  visual = (e) =>{
  }
  render() {
    return (
      <h1>{this.state.text}</h1>
    )
  }
}


class Teclado extends React.Component {



  render() {
    return (
      <ButtonsNumbers />
    )
  }
}

class ButtonsNumbers extends React.Component {
  render() {
    return (
      <div>
        <Btn>0</Btn>
        <Btn>1</Btn>
        <Btn>2</Btn>
        <Btn>3</Btn>
        <Btn>4</Btn>
        <Btn>5</Btn>
        <Btn>6</Btn>
        <Btn>7</Btn>
        <Btn>8</Btn>
        <Btn>9</Btn>
      </div>


    )
  }
}

class Btn extends React.Component {
  constructor(props){
    super(props)
  }
  Cliked = () =>{
  }
  render() {
    return (
      <button onClick={this.Cliked}>
        {this.props.children}
      </button>
    )
  }
}

class Calcultor extends React.Component {
  render() {
    return (
      <fieldset>
        <legend>Calculadora Basica</legend>
        <Painel />
        <Teclado />
      </fieldset>

    )
  }
}







function App() {
  return (
    <Calcultor />
  )
}

export default App;
