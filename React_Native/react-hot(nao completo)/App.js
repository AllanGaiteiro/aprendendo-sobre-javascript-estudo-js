///// Importar react e modulos usados
import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react'
import { Text, View, Button, 
 } from 'react-native'

/////// Componentes
import styles from './src/Styles';
import Navegacao from './src/components/Navegacao';
import Home from './src/components/Home';
import Servicos from './src/components/Servicos';
import Contatos from './src/components/Contatos';
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Meu App </Text>
        <View>
          
        </View>
        <Navegacao />
        <Home />
        <Servicos />
        <Contatos />
      </View>
    )
  }
}

export default App



///// Exportar Componete


// context API
// Redux