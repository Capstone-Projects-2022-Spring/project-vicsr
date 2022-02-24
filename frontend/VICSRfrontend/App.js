import React, { useState } from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';


const HelloWorldApp = () => {

    //These are the variables which hold
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        //Basically the head of the document
        <View style={styles.container}>
            {/* Header Text */}
            <Text>Please login below</Text>
            {/* A new view(like a div) associated with a new stylesheet */}
            {/* New component, collect user inputs*/}
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#003f5c"
                onChangeText={(email) => setEmail(email)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>
        </View>
      )
}
{/* Set of all stylesheets */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5FE88D',
    alignItems: 'center',
    justifyContent: 'center',
   },
    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    }
});

export default HelloWorldApp;