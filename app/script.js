
// document.addEventListener('DOMContentLoaded', () => {
//     const random = getRandomInt(1, 151)
//     fetchData(random)
// })

// const getRandomInt = (min, max) => {
//     return Math.floor(Math.random() * (max - min)) + min;
// }

  
// const flex = document.querySelector('.flex')
// const template = document.getElementById('template-card').content
// const fragment = document.createDocumentFragment()


// // API es una comunicacion que realizamos entre nuestro proyecto y un servidor web, nos trae la informacion en en formato json y nostrosla transformamos en objecto javascript.
// const fetchData = async (id) => {
//     try {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
//         const data = await res.json()
//         console.log(data)

//         // data.forEach(element =>{
//         //     const { name, imagen  } = element;
//         // })

//         const pokemon = {
//             img: data.sprites.other.dream_world.front_default,
//             name: data.name,
//             species: data.name,
//             hp: data.stats[0].base_stat,
//             experience: data.base_experience,
//             attack: data.stats[1].base_stat,
//             defense: data.stats[2].base_stat,
//             special: data.stats[3].base_stat,
//         }


//         pintarCard(pokemon)
//     } catch (error) {
//          console.log(error)
//     }
// }

// const pintarCard = (pokemon) => {

   
//     const clone = template.cloneNode(true) 

//     clone.querySelector('.card-body-img').setAttribute('src', pokemon.img)
//     clone.querySelector('.card-body-title').innerHTML = `${pokemon.name} <span>${pokemon.hp} hp</span> `
//     clone.querySelector('.card-body-text').textContent = pokemon.experience + ' Exp.'
//     clone.querySelectorAll('.card-footer-social h3')[0].textContent = pokemon.attack + ' K'
//     clone.querySelectorAll('.card-footer-social h3')[1].textContent = pokemon.special
//     clone.querySelectorAll('.card-footer-social h3')[2].textContent = pokemon.defense

//     fragment.appendChild(clone)
//     flex.appendChild(fragment)
// }


















