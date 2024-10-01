import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import biscoitoFechado from "./assets/biscoito.png";
import biscoitoAberto from "./assets/biscoitoAberto.png";

export default function App() {
	const [image, setImage] = useState(biscoitoFechado);
	const [frase, setFrase] = useState("");

	const frases = [
		"Aba abuuuu aba bu",
		"Boo baaa boo boo",
		"Zuu zaaa zububu",
		"Nii niiiin ni nan",
		"Loo lulu luu lolo",
		"Doo daaa doo doo",
		"Fii fuuuu fi fa",
		"Caa caaa ca cacá",
		"Soo suuuu so soso",
		"Pii puuuu pi pipi",
	];

	function quebrarBiscoito() {
		const index = Math.floor(Math.random() * frases.length);
		const fraseAleatoria = `"${frases[index]}"`;

		setFrase(fraseAleatoria);
		setImage(biscoitoAberto);
	}

	function reiniciar() {
		setImage(biscoitoFechado);
		setFrase("");
	}

	return (
		<View style={styles.container}>
			<Image source={image} style={styles.img} />

			<Text style={styles.textofrase}>{frase}</Text>

			<TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
				<View style={styles.btnArea}>
					<Text style={styles.btnTexto}>Clique no pitoco</Text>
				</View>
			</TouchableOpacity>

			<TouchableOpacity
				style={[styles.botao, { marginTop: 10, borderColor: "#121212" }]}
				onPress={reiniciar}
			>
				<View style={styles.btnArea}>
					<Text style={styles.btnTexto}>Reiniciar</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	img: {
		width: 230,
		height: 230,
	},
	textofrase: {
		fontSize: 20,
		color: "#dd7b22",
		margin: 30,
		fontStyle: "italic",
		textAlign: "center",
	},
	botao: {
		width: 230,
		height: 50,
		borderColor: "#dd7b22",
		borderWidth: 2,
		borderRadius: 25,
	},
	btnArea: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	btnTexto: {
		fontSize: 17,
		fontWeight: "bold",
		color: "#dd7b22",
	},
});
