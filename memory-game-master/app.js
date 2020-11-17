document.addEventListener('DOMContentLoaded', () => {
  // card options
  const cardArray = [
    {
      name: 'cat1',
      img: 'images/cat1.png'
    },
    {
      name: 'cat1',
      img: 'images/cat1.png'
    },
    {
      name: 'cat2',
      img: 'images/cat2.png'
    },
    {
      name: 'cat2',
      img: 'images/cat2.png'
    },
    {
      name: 'cat3',
      img: 'images/cat3.png'
    },
    {
      name: 'cat3',
      img: 'images/cat3.png'
    },
    {
      name: 'cat4',
      img: 'images/cat4.png'
    },
    {
      name: 'cat4',
      img: 'images/cat4.png'
    },
    {
      name: 'cat5',
      img: 'images/cat5.png'
    },
    {
      name: 'cat5',
      img: 'images/cat5.png'
    },
    {
      name: 'cat6',
      img: 'images/cat6.png'
    },
    {
      name: 'cat6',
      img: 'images/cat6.png'
    },
  ]

  // refresh the cards array to randomize cards
  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  // selecting the score element
  const resultDisplay = document.querySelector('#result')
  // create an empty array for cards chosen
  let cardsChosen = []
  let cardsChosenId = []
  // array to hold the matches
  const cardsWon = []

  // create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      // create card for each image
      let card = document.createElement('img')
      // give each card src attribute of blank image
      card.setAttribute('src', 'images/red.png')
      // give each card a dat-id from 1-12 (index)
      card.setAttribute('data-id', i)
      // create click event that triggers the 'flipcard' function
      card.addEventListener('click', flipCard)
      // add each card to grid with 'appendChild' (grid from div class grid index.html)
      grid.appendChild(card)
    }
  }

  // check for matches
  function checkForMatch() {
    // selecting all of the 'img' elements
    let cards = document.querySelectorAll('img')
    // grabbing values from the array at index 0 and 1
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId === optionTwoId) {
      // set the src attribute to a blank image for both cards
      cards[optionOneId].setAttribute('src', 'images/red.png')
      cards[optionTwoId].setAttribute('src', 'images/red.png')
      alert('You clicked the same card!')

    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You\'ve found a match')
      cards[optionOneId].setAttribute('src', 'images/yellow.png')
      cards[optionTwoId].setAttribute('src', 'images/yellow.png')
      // if matched, cannot click on images again
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      // push the match into the cardsWon array
      cardsWon.push(cardsChosen)
    } else {
      // flip card back over to be played again
      cards[optionOneId].setAttribute('src', 'images/red.png')
      cards[optionTwoId].setAttribute('src', 'images/red.png')
      alert('Sorry, try again!')
    }
    // reset the cardsChosen and cardsChosenId arrays
    cardsChosen = []
    cardsChosenId = []
    // setting the text of the resultDisplay element to the length of the cardsWon array (ie: Score: 3 if the length of the cardsWon array is 3 elements)
    resultDisplay.textContent = cardsWon.length
    // if the length of teh cardsWon array is half the length of the cardsArray, we've collected all possible matches
    if (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! You found them all!'
    }
  }

  // flip your card
  function flipCard() {
    // set cardId variable equal to the card element based on its data id
    let cardId = this.getAttribute('data-id')
    // push the card into the cardChosn array and grabbing its name
    cardsChosen.push(cardArray[cardId].name)
    // push the card id into the empty cardsChosenId array
    cardsChosenId.push(cardId)
    // changing the src image to match whatever image equals the card id
    this.setAttribute('src', cardArray[cardId].img)
    //we only want two images shown at one time
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 300)
    }
  }

  createBoard()
})
