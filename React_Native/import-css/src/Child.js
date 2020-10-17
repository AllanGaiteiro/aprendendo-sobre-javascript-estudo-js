import React, { Component } from 'react'
import { Text, View,Button } from 'react-native'

class Child extends Component {

    Alterar = (novoNome) => {
        // alterar nome do parent
        this.props.FuncaoAlterar(novoNome)
    }

    render() {
        return (
            <View>
                <Button
                    title={'button'}
                    onPress={() => this.Alterar('Isabela')}
                />
            </View>
        )
    }
}

export default Child