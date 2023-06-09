import { View, Text, Button, TextInput } from 'react-native'
import React, { useState } from 'react'

export default function Login(props) {
    const [name,setName] = useState('');
    // const name='charu';
    const age=20;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{fontSize:20, fontStyle: 'italic', color: 'grey',marginBottom: 15}}>You are on Login Page</Text>
      <TextInput style={{borderWidth: 1, padding: 15,borderRadius: 6,marginBottom: 10,borderColor: 'grey'}} onChangeText={(text)=>setName(text)} placeholder="enter your name" />
      <Button  title='Home Page' 
      onPress={()=>props.navigation.navigate("Home",{name,age})}/>

    </View>
  )
}