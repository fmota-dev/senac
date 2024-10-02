import React, { useContext } from "react";
import { Text, View } from "react-native";

import {
	AreaInput,
	Background,
	Container,
	Input,
	SubmitButton,
	SubmitText,
} from "../SignIn/styles";

import { AuthContext } from "../../contexts/auth";

export default function SignUp() {
	const { user } = useContext(AuthContext);

	function chamaFuncao() {
		alert(user.nome);
	}

	return (
		<Background>
			<Container>
				<AreaInput>
					<Input placeholder="Nome" />
				</AreaInput>

				<AreaInput>
					<Input placeholder="Seu email" />
				</AreaInput>

				<AreaInput>
					<Input placeholder="Sua Senha" />
				</AreaInput>

				<SubmitButton activeOpacity={0.8} onPress={chamaFuncao}>
					<SubmitText>Cadastrar</SubmitText>
				</SubmitButton>
			</Container>
		</Background>
	);
}
