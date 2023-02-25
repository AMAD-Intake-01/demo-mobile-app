import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DatePickerInput } from 'react-native-paper-dates';

export default function Login({ navigation }) {

    //this is a state
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [inputDate, setInputDate] = useState(undefined)

    //when login
    const onLogin = () => {
        console.log("Email is : " + email)
    }

    return (
        <View>
            <Icon name="youtube" size={30} color="#900" />

            <TextInput
                label="Enter Your Email"
                mode="flat"
                style={styles.txt1}
                value={email}
                onChangeText={x => setEmail(x)}
            />

            <TextInput
                label="Enter Your Password"
                mode="flat"
                style={styles.txt2}
                value={password}
                onChangeText={text => setPassword(text)}
                right={<TextInput.Icon icon="facebook" />}
            />

            <DatePickerInput
                locale="en"
                label="Birthdate"
                value={inputDate}
                onChange={(d) => setInputDate(d)}
                inputMode="start"
            />

            <Button mode="outlined" onPress={() => { navigation.navigate('Home')}} style={styles.btn}>
                Sign In
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    txt1: {
        width: '80%',
        marginLeft: '10%',
        marginTop: '30%',
        color: '#fff'
    },
    txt2: {
        width: '80%',
        marginLeft: '10%',
        marginTop: '5%'
    },
    btn: {
        width: '60%',
        marginTop: '5%',
        marginLeft: '20%'
    }
})