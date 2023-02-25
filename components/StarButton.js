import { View, Text } from 'react-native'
import React from 'react'

export default function StarButton(props) {
  return (
    <View style={{backgroundColor:'red',width:'40%',height:50,borderRadius:100,alignItems:'center',justifyContent:'center'}}>
      <Text style={{color:'white',fontSize:20}}>{props.name}</Text>
    </View>
  )
}