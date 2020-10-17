import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

/*
function Number (){

  const numbers = [1,2,3,4,5]
  const double = numbers.map((number) => number * 2)
  return(
    <li>{double}</li>
  )
}

ReactDOM.render(
  <Number/>,
  document.getElementById('root')
);
*/
function Menu(props) {
  const menuItens = props.menuItens
  const listMenuItems = menuItens.map((item) =>
    <li id={item} key={item.toString()}>{item}</li>)
  return (
    <ul>{listMenuItems}</ul>
  )
}

var menuItens = [`Iniciar`, `Sobre`, `Contatos`]
//menuItens.push(`texte`)

ReactDOM.render(
  <Menu menuItens={menuItens} />,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
