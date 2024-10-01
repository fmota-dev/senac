import React from "react";
import { View } from "react-native";
import AuthRoutes from "./auth.routes";

function Routes() {
	const loading = false;
	const signed = false;

	return signed ? <View>Logado</View> : <AuthRoutes />;
}

export default Routes;
