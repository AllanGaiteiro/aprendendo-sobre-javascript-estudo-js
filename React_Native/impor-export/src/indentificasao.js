////// chamar react

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

///// criar Componete
class Identificasao extends React.Component{
    render(){
        return(
            <View>
                <Text>Nome: {this.props.nome}</Text>
                
        <Text>Idade: {this.props.idade}</Text>
            </View>
        )
    }
}


///// Exportar Componete
export default Identificasao;