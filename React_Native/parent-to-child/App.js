///// Importar react e modulos usados
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Child from './src/Child';
import styles from './src/Styles';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nome: 'Allan'
    }
  }
  render() {
    return (
      <View
        style={styles.container}>
        <Button
        title={'button'}
          onPress={() =>
            this.setState(
              {
                nome: (this.state.nome == 'Allan') ? 'Isabela' : 'Allan'
              })} />
        <Child
          nome={this.state.nome} />

      </View>
    )
  }
}



///// Exportar Componete
export default App;