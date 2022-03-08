import Login from "./components/Login.js"

import React, { useState } from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {

    //These are the variables which hold
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        //wrap the whole thing in a navigationcontainer
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Login">
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>

      )
}

export default App;