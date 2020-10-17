import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';
/*
function Temper(props){
  //alert(props.celsius)
  if (props.celsius >= 100) {
    return <p>A água ferveria</p>
  }
  return <p>A água não ferveria</p>
}

class Calculator extends React.Component{
  constructor(props){
    super(props)
    this.state = {temper: null}
  }
  altera = (event) => {
    this.setState({temper: event.target.value})
  }

  render(){
    return(
      <fieldset>
        <legend>Informe a temperatura em celsius </legend>
        <input type='number' value={this.state.temper} onChange={this.altera}/>
        <Temper celsius={this.state.temper} />
      </fieldset>
      
    )
  }
}


ReactDOM.render(
  < Calculator/>,
  document.getElementById('root')
);
*/
function toCelsius(fahrenheit){
  return(fahrenheit - 32)* 5/9
}
function toFahrenheit(celsius){
  return (celsius * 9/5) + 32
}

function TryConvert(temper,convert){
  const input = parseFloat(temper)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000)/ 1000
  return rounded.toString()
}

function Verifiq(props) {
  //alert(props.celsius)
  if (props.celsius >= 100) {
    return <p>A água ferveria</p>
  }
  return <p>A água não ferveria</p>
}

const scaleName = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
class TemperatureInput  extends React.Component {
  constructor(props) {
    super(props)
    this.state = { temper: '' }
  }
  altera = (e) => {
    this.props.onTemperChange(e.target.value)
  }

  render() {
    const scale = this.props.scale
    const temper = this.props.temper
    return (
      <fieldset>
        <legend>Informe a temperatura em {scaleName[scale]} </legend>
        <input type='number' value={temper} onChange={this.altera} />
      </fieldset>

    )
  }
}
class Calculator extends React.Component {
  constructor(props) {
    super(props)
    this.state = { temper: '', scale: 'c'}
  }

  celsiusTemperChange = (temper) => {
    this.setState({ scale: 'c', temper})
  }
  fahrenheitTemperChange = (temper) => {
    this.setState({ scale: 'f', temper})
  }
  
  render() {
    const scale = this.state.scale
    const temper = this.state.temper
    /// para celsius
    const celsius = scale === 'f'? 
    TryConvert(temper,toCelsius) : temper
    /// para fahrenheit
    const fahrenheit = scale === 'c'? 
    TryConvert(temper,toFahrenheit) : temper

    return (
      <div>
        <TemperatureInput scale='c' temper={celsius} onTemperChange={this.celsiusTemperChange}/>
        <TemperatureInput scale='f' temper={fahrenheit}  onTemperChange={this.fahrenheitTemperChange}/>
        <Verifiq celsius={temper}/>
      </div>
    )
  }
}

ReactDOM.render(
  < Calculator />,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
