//Example fetch using pokemonapi.co
function getType(){
  let randomNum = Math.floor(Math.random() * 19)
  
    switch(randomNum){
      case 1:
      return 'water'  
      case 2:
      return 'fire'
      case 3:
      return 'grass'
      case 4:
      return 'steel'
      case 5:
      return 'rock'
      case 6:
      return 'ground'
      case 7:
      return 'bug'
      case 8:
      return 'ice'
      case 9:
      return 'psychic'
      case 10:
      return 'ghost'
      case 11:
      return 'fighting'
      case 12:
      return 'flying'
      case 13:
      return 'electric'
      case 14:
      return 'poison'
      case 15:
      return 'dragon'
      case 16:
      return 'dark'
      case 17:
      return 'normal'
      case 18:
      return 'fairy'
      default:
      return 'error'
  
    }
  }
  
document.querySelector('button').addEventListener('click', getFetch)




function getFetch(){
  let pokeType = getType()
  
  
  const url = `https://pokeapi.co/api/v2/type/${pokeType}`
  
  

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
       function getRandom(num){
        return Math.floor(Math.random() * num)
       }
       let rando = getRandom(data.pokemon.length)
       let pokeName = data.pokemon[rando].pokemon.name
       document.querySelector('#randomPoke').innerHTML = pokeName.toUpperCase()
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
            .then(res => res.json())
            .then(data => {
              document.querySelector('#pokeImg').src = data.sprites.front_default
            })
            let backColor = ''
            if(pokeType == 'fire'){
              backColor = 'red'
            }else if(pokeType == 'water'){
              backColor = 'blue'
            }else if(pokeType == 'grass'){
              backColor = 'green'
            }else if(pokeType == 'fairy'){
              backColor = 'pink'
            }else if(pokeType == 'steel'){
              backColor = 'gray'
            }else if(pokeType == 'ground'){
              backColor = 'rgb(154, 111, 111)'
            }else if(pokeType == 'rock'){
              backColor = 'burlywood'
            }else if(pokeType == 'electric'){
              backColor = 'yellow'
            }else if(pokeType == 'dark'){
              backColor = 'black'
            }else if(pokeType == 'psychic'){
              backColor = 'rgb(244, 10, 244)'
            }else if(pokeType == 'fighting'){
              backColor = 'orange'
            }else if(pokeType == 'ghost'){
              backColor = 'purple'
            }else if(pokeType == 'flying'){
              backColor = 'lightblue'
            }else if(pokeType == 'poison'){
              backColor = 'violet'
            }else if(pokeType == 'bug'){
              backColor = 'lime'
            }else if(pokeType == 'dragon'){
              backColor = 'orangered'
            }else if(pokeType == 'normal'){
              backColor = 'white'
            }else if(pokeType == 'ice'){
              backColor = 'rgb(156, 156, 227)'
            }
          document.querySelector('html').style.backgroundColor = backColor
            const textColor = document.querySelectorAll('.text')
          if(backColor === 'black'){
            for(const text of textColor){
            text.classList.add('textWhite')
            }
          } else if(backColor !== 'black'){
            for(const text of textColor){
            text.classList.remove('textWhite')
            }
          }
      })
      .catch(err => {
          console.log(`error ${err}`)
      });


      
}
        
    

