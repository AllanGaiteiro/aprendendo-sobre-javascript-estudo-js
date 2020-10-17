import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';


class Formulario extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inpvValue: '',txtValue: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'}
  }
  envio = () => {
    alert('nome: '+ this.state.inpvValue + ' disse: '+ this.state.txtValue)

  }
  altero = (event) => {// a cad tecla e atualizado
    ////alert(event.target.id)
    if (event.target.id == 'name') {
      
      this.setState({ inpvValue: event.target.value })
      
    }else {
      this.setState({ txtValue: event.target.value })
    }
    // modifica o state
  }

  render() {
    return (
      <form onSubmit={this.envio}>
        <label>Nome:
        <input type='text' id='name' value={this.state.inpvValue} onChange={this.altero} />
          <textarea  id='text' value={this.state.txtValue} onChange={this.altero} />
        </label>
        <input type='submit' name='Enviar' />
      </form>
    )
  }
}
class SelecForm extends React.Component{
  constructor(props){
    super(props)
    this.state = {value:'Coco'}
  }
  selecao = (event) => {
    this.setState({value: event.target.value})
  }
  eniar = () => {
    alert('Seu sabor Favorito é: ' + this.state.value)
  }
  render(){
    return(
      <form onSubmit={this.eniar}>
        <label>
          <select value={this.state.value} onChange={this.selecao}>
            <option value='Larana'>Laranja</option>
            <option value='Limao' >Limao</option>
            <option value='Coco' >Coco</option>
            <option value='Manga' >Manga</option>
          </select>
        </label>
        <input type='submit' value='Enviar'  />
      </form>
    )
  }
}


class App extends React.Component{
  render(){
    return(
      <div>
        <SelecForm/>
        <Formulario/>
      </div>
    )
  }
}
ReactDOM.render(
  <App/> ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
