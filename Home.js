import { View, Text } from 'react-native'
import React from 'react'

export default function Home(props) {
    console.log(props.route.params)
    const {name,age} = props.route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20, fontStyle: 'italic', color: 'black'}}>You are on Home Page</Text>
      <Text style={{fontSize:20, fontStyle: 'italic', color: 'grey'}}>Welcome {name}, {age}</Text>
    </View>
  )
}