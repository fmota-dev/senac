import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const AuthStack = createNativeStackNavigator();

function AuthRoutes() {
	return (
		<AuthStack.Navigator>
			<AuthStack.Screen
				name="SignIn"
				component={SignIn}
				options={{ headerShown: false }}
			/>
			<AuthStack.Screen
				name="SignUp"
				component={SignUp}
				options={{ headerShown: false }}
			/>
		</AuthStack.Navigator>
	);
}

export default AuthRoutes;
