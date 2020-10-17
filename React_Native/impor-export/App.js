///// Importar react e modulos usados
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Indentificasao from './src/indentificasao'

//// criaçao do componente
function App() {
  return (
    <View style={styles.container}>
      <Indentificasao 
      nome='Allan'
      idade={} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

///// Exportar Componete
export default App;