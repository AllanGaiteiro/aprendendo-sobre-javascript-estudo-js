import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

function UserlogedIn(props) {
  return (<h1>Bem Vindo!</h1>)
}
function UserNotLogedIn(props) {
  return (<h1>Entrar</h1>)
}

function Greeting(props) {
  if (props.logado) {
    return <UserlogedIn />
  }
  return <UserNotLogedIn />
}
function LoginBtn(props) {
  return (
    <button onClick={props.onClick}>login</button>
  )
}
function LogoutBtn(props) {
  return (
    <button onClick={props.onClick}>logout</button>
  )
}
class Loge extends React.Component {
  constructor(props) {
    super(props)
    this.state = { logado: false }
  }
  clicklog = () => {
    this.setState({ logado: !this.state.logado })
  }
  //logado =() =>{
  //this.setState(state => ({liga_desl: !state.liga_desl}))
  //}
  render() {
    let button = this.state.logado ?
      (
        <LogoutBtn onClick={this.clicklog} />
      ) : (
        <LoginBtn onClick={this.clicklog} />
      )
    return (
      <div>
        <Greeting logado={this.state.logado} />
        {button}
      </div>
    )
  }
}
ReactDOM.render(
  <Loge />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
