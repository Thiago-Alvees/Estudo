var quantidade = document.getElementById('quantidade');
quantidade.addEventListener('keyup',()=>{
pegaPokemons(quantidade.value);
})
/*Pegando as informações dos pokémons */
pegaPokemons(9); //Definindo a quantidade inicial de pokémons que irão aparecer na tela
function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = [];

        allpokemon.results.map((val)=>{
            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle => {
                pokemons.push({nome:val.name,imagem:pokemonSingle.sprites.front_default});
                if(pokemons.length == quantidade){
                //Exibindo as informações de imagem e nome.
                var pokemonBoxes = document.querySelector('.pokemon-boxes');
                pokemonBoxes.innerHTML = "";
                pokemons.map(function(val){
                    pokemonBoxes.innerHTML+=`
                    <div class="pokemon-box">
                        <img src="`+val.imagem+`" />
                        <p>`+val.nome+`</p>
                    </div>`;
                })
            }
        })
    })
})

}