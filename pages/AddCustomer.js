import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';

export default function AddCustomer() {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [salary, setSalary] = useState('');


    return (
        <View>
            <Text>AddCustomer</Text>

            <TextInput
                label="Enter Your Id"
                mode="flat"
                style={styles.txt1}
                value={id}
                onChangeText={x => setId(x)}
            />
            <TextInput
                label="Enter Your Name"
                mode="flat"
                style={styles.txt1}
                value={name}
                onChangeText={x => setName(x)}
            />
            <TextInput
                label="Enter Your Address"
                mode="flat"
                style={styles.txt1}
                value={address}
                onChangeText={x => setAddress(x)}
            />
            <TextInput
                label="Enter Your Salary"
                mode="flat"
                style={styles.txt1}
                value={salary}
                onChangeText={x => setSalary(x)}
            />

            <Button mode="outlined">
                Save Customer
            </Button>

        </View>
    )
}

const styles = StyleSheet.create({
    txt1: {

    }
});