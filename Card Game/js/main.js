let deckId = ''



fetch('https://www.deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
.then(res => res.json())
.then(data => {
  console.log(data)
   deckId = data.deck_id
})
.catch(err => {
  console.log(`error ${err}`)
});

document.querySelector('button').addEventListener('click', drawCard)

function drawCard(){
  const url = `https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1img').src = data.cards[0].image
        document.querySelector('#player2img').src = data.cards[1].image
        let player1Val = convertToNum(data.cards[0].value)
        let player2Val = convertToNum(data.cards[1].value)
        if(player1Val > player2Val){
          document.querySelector('h3').innerHTML = 'Player 1 Wins'
        }else if(player2Val > player1Val){
          document.querySelector('h3').innerHTML = 'Player 2 Wins'
        } else{
          document.querySelector('h3').innerHTML = 'War'
        }
        document.querySelector('aside').innerHTML = data.remaining
        
        })
      } 

      function convertToNum(val){
        switch(val){
          case 'JACK':
            return 11;
          case 'QUEEN':
            return 12;
          case 'KING':
            return 13;
          case 'ACE':
            return 14
          default:
          return Number(val)

        }
      }
        
      
    

