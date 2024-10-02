import React from "react";
import { Platform } from "react-native";

import {
	AreaInput,
	Background,
	Container,
	Input,
	Link,
	LinkText,
	Logo,
	SubmitButton,
	SubmitText,
} from "./styles";

import imgLogo from "../../../assets/Logo.png";

import { useNavigation } from "@react-navigation/native";

export default function SignIn() {
	const navigation = useNavigation();

	return (
		<Background>
			<Container behavior={Platform.OS === "ios" ? "padding" : ""} enabled>
				<Logo source={imgLogo} />

				<AreaInput>
					<Input placeholder="Seu email" />
				</AreaInput>

				<AreaInput>
					<Input placeholder="Sua senha" />
				</AreaInput>

				<SubmitButton activeOpacity={0.8}>
					<SubmitText>Acessar</SubmitText>
				</SubmitButton>

				<Link onPress={() => navigation.navigate("SignUp")}>
					<LinkText>Criar uma conta!</LinkText>
				</Link>
			</Container>
		</Background>
	);
}
