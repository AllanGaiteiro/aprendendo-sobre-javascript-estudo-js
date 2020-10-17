import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

///////////// Components e Props
/*
class Welcome extends React.Component{
  render(){
  return <h1>Hello, {this.props.name}</h1>
  }
}
const elemet = <Welcome name='Allan'/>
ReactDOM.render(
  elemet,document.getElementById('root')
)
*/

/*
class Welcome extends React.Component{
  render(){
  return <h1>Hello, {this.props.name}</h1>
  }
}
function App(){
  return(
    <div>
      <Welcome name='Allan'/>
      <Welcome name='Isabela'/>
      <Welcome name='Nick'/>
    </div>
  )
}
ReactDOM.render(
  <App/>,
  document.getElementById('root')
)*/

///////////////////////////State e Ciclo de Vida
/*
function Welcome(props) {
  return (
    <h1>Hello, {props.name}</h1>
  )
}

function tick() {
  const element = (
    <div>
      <Welcome name='Allan' />
      <h2>Agora sao {new Date().toLocaleTimeString()}.</h2>
    </div>
  )
  ReactDOM.render(
    element, 
    document.getElementById('root')
  )
}

setInterval(tick, 1000)
*/


/*
//////////////////////////Bemvindo///////////////
function BemVindo(props) {
  return (
    <h1>Seja Bem Vindo,{props.name}</h1>
  )
}
//////////////////Data relogio////////////////
function Day(props){
  return(
  <h2>{props.date.toLocaleDateString()}</h2>
  )
}
///////////Tempo Relogio ////////////
class Time(props) {
  return (
      <h2>Agora sao {props.date.toLocaleTimeString()}</h2>
  )
}
/////////////////Relogio Completo///////
function Relogio() {
  return (
    <div>
      <Day date={new Date()}/>
      <BemVindo name='Allan Gaiteiro' />
      <Time date={new Date()} />
    </div>

  )
}
///////////////o App//
function App(){
  ReactDOM.render(
    <Relogio/>,
    document.getElementById('root')
  )
}

setInterval(App, 1000)

*/



////////////////////////

function BemVindo(props) {
  return (
    <h1>Seja Bem Vindo,{props.name}</h1>
  )
}
//////////////////Data relogio////////////////
function Day(props) {
  return (
    <h2>{props.date.toLocaleDateString()}</h2>
  )
}
///////////Tempo Relogio ////////////
class Time extends React.Component {
  constructor(props){
    super(props)
    this.state = {date: new Date()}
  }
  ///confg Temporizador
  componentDidMount(){
    this.timerID = setInterval(() => this.tick(),1000)
  }
  //// limpar temporizado
  componentWillUnmount(){
    clearInterval(this.timerID)

  }
  tick(){
    this.setState({
      date: new Date()
    })
  }
  render(){
    return(
      <div>
        <h2> Agora são { this.state.date.toLocaleTimeString() }</h2 >
      </div>
      
    )
  }
}
/////////////////Relogio Completo///////
function Relogio() {
  return (
    <div>
      <Day date={new Date()} />
      <BemVindo name='Allan Gaiteiro' />
      <Time/>
    </div>

  )
}
///////////////o App//
function App() {
  return(
    <div>
      <Relogio/>
      <Relogio/>
      <Relogio/>
    </div>
  )

}

  ReactDOM.render(
  <App />,
  document.getElementById('root')
)