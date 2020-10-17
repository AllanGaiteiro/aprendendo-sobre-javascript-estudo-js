///// Importar react e modulos usados
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Child from './src/Child';
import styles from './src/Styles';
import './src/App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: 'Allan'
    }
  }
  Alterar = (novoNome) => {
    this.setState({
      nome: (this.state.nome == "Allan") ? novoNome : 'Allan'
    })
  }
  render() {
    return (
      <View
        style={styles.container}>
        <p
          className='cor_Red'>
          {this.state.nome}
        </p>
        <Child
          FuncaoAlterar={this.Alterar} />

      </View>
    )
  }
}



///// Exportar Componete
export default App;

// context API
// Redux