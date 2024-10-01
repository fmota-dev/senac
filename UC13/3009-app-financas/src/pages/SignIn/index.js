import React from "react";
import logoImg from "../../../assets/Logo.png";
import { SignStyles } from "./styles.js";

export default function SingnIn() {
	return (
		<SignStyles.Background>
			<SignStyles.Container>
				<SignStyles.Logo source={logoImg} />
			</SignStyles.Container>
		</SignStyles.Background>
	);
}
