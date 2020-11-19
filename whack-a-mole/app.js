const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

const randomSquare = () => {
  // remove mole class from divs to start new game
  square.forEach(className => {
    className.classList.remove('mole')
  })
  let randomPosition = square[Math.floor(Math.random() * 9)]
  randomPosition.classList.add('mole')

  // assign the id of the randomPosition to hitPosition
  hitPosition = randomPosition.id
}

square.forEach(id => {
  id.addEventListener('mouseup', () => {
    if (id.id === hitPosition) {
      result = result + 1
      score.textContent = result
      hitPosition = null
    }
  })
})

const moveMole = () => {
  let timerId = null
  timerId = setInterval(randomSquare, 500)
}

moveMole()

const countDown = () => {
  currentTime--
  timeLeft.textContent = currentTime

  if (currentTime === 0) {
    alert('GAME OVER! Your final score is ' + result)
    location.reload()
  }
}

let timerId = setInterval(countDown, 500)
