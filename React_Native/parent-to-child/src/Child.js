import React, { Component } from 'react'
import { Text, View } from 'react-native'

class Child extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.nome}</Text>
      </View>
    )
  }
}

export default Child