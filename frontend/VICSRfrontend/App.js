import React, { useState } from 'react';
import {TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const HelloWorldApp = () => {

    //These are the variables which hold
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        //Basically the head of the document
        <View style={styles.container}>
            {/*Logo Image*/}
            <Image style={styles.image} source={require("./assets/elephant.png")} />
            {/* Header Text */}
            <Text>Please login below</Text>
            {/* A new view(like a div) associated with a new stylesheet */}
            {/* New component, collect user inputs*/}
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Email."
                placeholderTextColor="#0c0203"
                onChangeText={(email) => setEmail(email)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="#0c0203"
                secureTextEntry={true}
                onChangeText={(password) => setPassword(password)}
              />
            </View>

            {/* Touchable components to act as buttons, can be tied to an action, also is properly animated to show press down */}
            {/* Forgot password and login buttons */}
            <TouchableOpacity>
                <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
                <Text style={styles.loginText}>Register an Account</Text>
            </TouchableOpacity>

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

    forgot_button: {
        height: 30,
        marginBottom: 30,
        color: "#0c0203"
    },

    image: {
      height: 300,
      width: 200,
      marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#FFC0CB",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },
    loginBtn: {
        width:"80%",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
        backgroundColor:"#e85f76",
    },

    loginText: {
      color: "#0c0203"
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    }
});

export default HelloWorldApp;