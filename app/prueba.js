 // Captura de la informacion del DOM.
const main = document.getElementById('render')
const search = document.getElementById('buscar')
const form = document.getElementById('formulario')
const btn = document.getElementById('boton')
const template = document.getElementById('template-card').content
const fragment = document.createDocumentFragment()

// Tan pronto como inicia el carge de la pagina se ejecuta lo siguiente.
document.addEventListener('DOMContentLoaded', () => {

    const idCount = getCount()
    getPokemon(idCount);
})

// Obtenemos la data de la API.
const getPokemon = async (id) => {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        const data = await res.json()
        // console.log(data)
        const pokemon = [{
                        img: data.sprites.other.dream_world.front_default,
                        name: data.name,
                        species: data.name,
                        type: data.types[0].type.name,
                        life: data.stats[0].base_stat,
                        attack: data.stats[1].base_stat,
                        defense: data.stats[2].base_stat,  
                    }]
        showPokemon(pokemon)
                    
    } catch (error) {
        console.log(error)
    }
}
// Se limita a cierta cantidad los Pokemons a mostrar.
const getCount = () => {
    for (let i = 1; i <= 2; i++) {
        getPokemon(i)
    }
}

// Se renderiza al Pokemon con su respectiva informacion.
const showPokemon = (pokemon) => {
// console.log(pokemon)

    pokemon.forEach(poke => {
        template.querySelector('.initial-img').setAttribute('src', poke.img)
        template.querySelector('.card-title').innerHTML = poke.name
        template.querySelectorAll('.description h3')[0].textContent = poke.type
        template.querySelectorAll('.description h3')[1].textContent = poke.species
        template.querySelectorAll('.description h3')[2].textContent = poke.defense 

        const clone = template.cloneNode(true)
        fragment.appendChild(clone)

})
main.appendChild(fragment);

}


form.addEventListener('submit', e => {
    e.preventDefault();

    const searchPokemon = search.value.toLocaleLowerCase()

    if (searchPokemon && search !== '') {
        getPokemon(search + `https://pokeapi.co/api/v2/pokemon/${types}`)
        search.value = ''
    } else {
        prompt('Debe ingresar un dato.')
    }
})