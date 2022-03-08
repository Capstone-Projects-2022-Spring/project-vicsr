import Login from "./components/Login.js"
import Register from "./components/Register.js"

import React, { useState } from 'react';

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => {


    return (
        //wrap the whole thing in a navigationcontainer
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Login">
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name= "Register" component={Register} />
            </Stack.Navigator>
        </NavigationContainer>

      );
};

export default App;