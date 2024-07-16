import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import StackNavigation from './frontend/src/navigation/StackNavigation'
import AuthStack from './frontend/src/navigation/AuthStack'

const App = () => {
  return (
    <View style={{flex:1}}>
   <AuthStack/>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})