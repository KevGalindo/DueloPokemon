$(document).ready(function() {
    $.getJSON('./json/pokemon.json', function(apiData) {
        const entrenadorContainer = $('#entrenadores-container');

        apiData.forEach(entrenador => {
            const entrenadorDiv = $(`
                <div class="entrenador">
                    <h3>${entrenador.entrenador}</h3>
                </div>
            `);

            entrenador.pokemons.forEach(pokemon => {
                const pokemonDiv = $(`
                    <div class="pokemon ${pokemon.tipo}">
                        <img src="${pokemon.foto}" alt="${pokemon.nombre}" width="80" height="80">
                        <p>${pokemon.nombre}</p>
                    </div>
                `);
                entrenadorDiv.append(pokemonDiv);
            });

            entrenadorContainer.append(entrenadorDiv);
        });
    });
});
