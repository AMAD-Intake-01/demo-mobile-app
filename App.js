import React from "react";
import { View, Text } from 'react-native'
import Home from "./pages/Home";
import Login from "./pages/Login";
import { SafeAreaProvider } from "react-native-safe-area-context";
import About from "./pages/About";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddCustomer from "./pages/AddCustomer";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="AddCustomer" component={AddCustomer} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;