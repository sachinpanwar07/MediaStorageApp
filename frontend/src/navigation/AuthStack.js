import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/LoginScreen';
import InitialScreen from '../screens/InitialScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ForgotPassword from '../screens/ForgotPassword';
const AuthStack = () => {
const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      
    <Stack.Navigator>
    <Stack.Screen name="initialScreen" component={InitialScreen} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="login" component={Login} 
      options={{headerShown:false}}
      />
      <Stack.Screen name="Register" component={RegisterScreen}
      options={{headerShown:false}}
      />
      <Stack.Screen name="Forgotpassword" component={ForgotPassword} 
      options={{headerShown:false}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AuthStack