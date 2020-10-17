import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


/*
function FancyBorder(props){
  return(
    <div className={'fancy ' + props.color}>
      {props.children}
    </div>
  )
}

function WelcomeDialog(){
  return(
    <FancyBorder color='blue'>
      <h1 className='Dialog-title'>Bem-vindo</h1>
      <p className='Dialog-message'>
        Obrigado por Visitar a nossa Espaçonave
      </p>
    </FancyBorder>
  )
}
ReactDOM.render(
  <WelcomeDialog/>,
  document.getElementById('root')
);
*/
function Contacts(props){
  return(
    <h1>nome da pessoa</h1>
  )
}
function Chat(props){
  return(
    <p>Messagem da pessoa</p>
  )
}


function SplitPane(props) {
  return (
    <div className='SplitPane'>
      <div className='Split-Contacts'>
        {props.contato}
      </div>
      <div className='Split-message'>
        {props.post}
      </div>
    </div>
  )
}

function App(){
  return (
    <SplitPane contato={<Contacts/>} post={<Chat/>}/>
  )
}

ReactDOM.render(
  <App/>,document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
