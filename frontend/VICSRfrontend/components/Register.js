import React, {useState} from 'react';
import {Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";

function Register( {navigation} ) {
    //These are the variables which hold input from the user
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return(
        //head of the document
        <View style={styles.container}>
            {/*Logo Image*/}
            <Image style={styles.image} source={require("../assets/elephant.png")} />
            {/* Header Text */}
            <Text>Please register below</Text>

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

            {/* Go Button!*/}
            <TouchableOpacity style={styles.loginBtn}  onPress={() => navigation.navigate('Register')}>
                <Text style={styles.loginText}>Register an Account</Text>
            </TouchableOpacity>

        </View>
    );
};

{/* Set of all stylesheets for this page */}
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

export default Register
