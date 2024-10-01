import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SingnIn from "../pages/SignIn";
import SignUp  from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes(){
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name="SignIn"
                component = {SingnIn}
            />
            <AuthStack.Screen 
                name="SignUP"
                component = {SignUp}
            />

        </AuthStack.Navigator>
    )
}

export default AuthRoutes;