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
function splitDeck(){
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/draw/?count=52`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      console.log(data)
      let player1StartingCards =[]
      let player2StartingCards =[]
      for(let i = 0; i< 26;i++){
       player1StartingCards.push(data.cards[i].code)
      }
      for(let i = 26
        
        ;i < 52 ;i++){
        player2StartingCards.push(data.cards[i].code)
        }
      fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player1/add/?cards=${player1StartingCards}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      console.log(data)})
      fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player2/add/?cards=${player2StartingCards}`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
      console.log(data)})
      })
        
}
document.querySelector('#play').addEventListener('click', drawCard)
document.querySelector('#split').addEventListener('click', splitDeck)

function drawCard(){
 
  
  fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player1/draw/?count=1`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player1img').src = data.cards[0].image
        let player1Val = convertToNum(data.cards[0].value)
        let player1Cards = data.cards[0].code
    
      fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player2/draw/?count=1`)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('#player2img').src = data.cards[0].image
        let player2Val = convertToNum(data.cards[0].value)
        let player2Cards = data.cards[0].code
        if(player1Val > player2Val){
          document.querySelector('h3').innerHTML = 'Player 1 Wins'
          fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player1/add/?cards=${player1Cards,player2Cards}`)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            document.querySelector('#player1Pile').innerHTML = data.piles.player1.remaining
          })
        }else if(player2Val > player1Val){
          document.querySelector('h3').innerHTML = 'Player 2 Wins'
          fetch(`https://www.deckofcardsapi.com/api/deck/${deckId}/pile/player2/add/?cards=${player2Cards, player2Cards}`)
          .then(res => res.json()) // parse response as JSON
          .then(data => {
            document.querySelector('#player2Pile').innerHTML = data.piles.player2.remaining
        })
       } else{
          document.querySelector('h3').innerHTML = 'War'
        }
        document.querySelector('#cardCount').innerHTML = data.remaining
        
        })
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
        
      
    

