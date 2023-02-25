import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

export default function RoundButton() {
    return (
        <TouchableOpacity onPress={() => { console.log("Roud btn pressed !"); }} style={{ backgroundColor: 'red', width: 100, height: 100, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Click Me</Text>
        </TouchableOpacity>
    )
}