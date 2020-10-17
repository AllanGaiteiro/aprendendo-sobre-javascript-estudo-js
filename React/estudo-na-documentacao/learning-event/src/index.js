import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

/*
function Eventos() {
 
  function btnClick(){
    alert('funcionando')
  }

  return (
    <button onClick={btnClick}>
     botao Clicado
    </button>
  )
}



ReactDOM.render(
  <Eventos />,
  document.getElementById('root')
);
*/
////// eventos lida desliga //////////////
/*
class Lampada extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liga_desl: true }
    ///this.btnClick = this.btnClick.bind(this)// metodo 1
  }
  /*btnClick(){// metodo 1
    this.setState(state => ({
      liga_desl: !state.liga_desl
    }))
  }*/
  ///////// Metodo 2 /////
/*
  btnClick = () => {
    this.setState(state => ({liga_desl: !state.liga_desl}))
  }
  ///// prefiro esse 
  render(){
    return(
      <button onClick={this.btnClick}>
        {this.state.liga_desl ? 'Ligado':'Desligado'}
      </button>
    )
  }
}*/
  //////////////////////// metodo 3 ////////////////////////

  /*btnClick() {
    this.setState(state => ({ liga_desl: !state.liga_desl }))
  }
  ///// prefiro esse 
  render() {
    return (
      <button onClick={() => this.btnClick()}>
        {this.state.liga_desl ? 'Ligado' : 'Desligado'}
      </button>
    )
  }
}*/

////////////////////////nao recomendado///////////////////////
/*ReactDOM.render(
  <Lampada />,
  document.getElementById('root')
)
*/

////////////////////////////////////////////////////


class Lampada extends React.Component {
  constructor(props) {
    super(props)
    this.state = { liga_desl: true }
  }


  btnClick = () => {
    this.setState(state => ({liga_desl: !state.liga_desl}))
  }
  ///// prefiro esse 
  render(){
    return(
      <button id={this.state.liga_desl? 'gren': 'red'} onClick={this.btnClick}>
        {this.state.liga_desl ? 'Ligado':'Desligado'}
      </button>
    )
  }
}

ReactDOM.render(
  <Lampada />,
  document.getElementById('root')
)