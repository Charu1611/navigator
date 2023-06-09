import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Home';
import Login from './Login';
import Header from './Header';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'blue'},
          headerTitleStyle : {
            color : 'white',
          }
      }}>
      <Stack.Screen name='Login' component={Login} options={{
        headerTitle: ()=><Button onPress={()=>alert('hello left')} title='Left'/>,
        headerRight: ()=><Header/>,
        headerStyle: {
          backgroundColor: 'orange'},
          headerTitleStyle : {
            color : 'white',
          }
      }}/>
      <Stack.Screen name='Home' component={Home} />
      
      </Stack.Navigator>
    </NavigationContainer>
  );
}
