import { snakeSpeed, update as updateSnake, draw as drawSnake, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

const main = (currentTime) => {
  // check for game over state:
  if (gameOver) {
    if(confirm('You lost. Press ok to restart')) {
      // refresh page to restart game
      window.location = '/'
    }
    return
  }
  // re-call the main function immediately to create a game loop
  window.requestAnimationFrame(main) // pass in main function to loop. Request the currentTime for when we want to render the frame. When it can render a frame, it will call the main function.
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000

  if (secondsSinceLastRender < 1 / snakeSpeed) return

  lastRenderTime = currentTime

  update()
  draw()
}

// starting loop the first time
window.requestAnimationFrame(main)


/////////////////////////
// GAME LOGIC

const update = () => {
  updateSnake()
  updateFood()
  checkDeath()
}

const draw = () => {
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)
}

const checkDeath = () => {
  // check if the head of snake runs off the grid or if snake head has intersected itself
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
