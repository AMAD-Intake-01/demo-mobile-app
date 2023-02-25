import { View, Text } from 'react-native'
import React from 'react'
import StarButton from '../components/StarButton'
import { Button } from 'react-native-paper';

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <StarButton name="Star Button" />
      <StarButton name="Click Me" />
      <StarButton name="Press" />

      <Button mode="outlined" onPress={() => { navigation.navigate('AddCustomer') }}>
        Add Customer
      </Button>

    </View>
  )
}