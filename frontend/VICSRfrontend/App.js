import React, { useState } from 'react';
import {TextInput, StyleSheet, Text, View } from 'react-native';


const HelloWorldApp = () => {

    //These are the variables which hold
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
          }}>
            <Text>Please login below</Text>
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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   },

   image :{
    marginBottom: 40

  }

});

export default HelloWorldApp;