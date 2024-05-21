document.getElementById("pokemonForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("pokemonName").value;
  try {
    const response = await fetch(`/quemEhEssePokemon/${name}`);
    if (response.ok) {
      const pokemon = await response.json();
      document.getElementById("pokemonInfo").innerHTML = `
            <h2>${pokemon.name}</h2>
            <p>ID: ${pokemon.id}</p>
            <p>Altura: ${pokemon.height / 10} m</p>
            <p>Peso: ${pokemon.weight / 10} kg</p>
            <img src="${pokemon.animation}" alt="${pokemon.name}">
          `;
    } else {
      document.getElementById("pokemonInfo").innerHTML =
        "<p>Pokémon não encontrado</p>";
    }
  } catch (error) {
    document.getElementById("pokemonInfo").innerHTML =
      "<p>Erro ao buscar Pokémon</p>";
  }
});
