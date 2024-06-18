import axios from "axios";
import express from "express";
import path from "path";

const app = express();
const porta = 3000;

app.use(express.json());
app.use(express.static("public"));

app.get("/quemEhEssePokemon/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}`
    );
    const pokemon = response.data;
    res.json({
      name: pokemon.name,
      id: pokemon.id,
      height: pokemon.height,
      weight: pokemon.weight,
      img: pokemon.sprites.front_default,
      animation:
        pokemon.sprites.versions["generation-v"]["black-white"].animated
          .front_default,
    });
  } catch (error) {
    res.status(404).send({ message: "Pokemon não encontrado" });
  }
});

app.listen(porta, () => {
  console.log(`Servidor rodando no endereço http://localhost:${porta}`);
});
