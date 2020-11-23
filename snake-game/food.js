import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
// how much the snake grows when it eats food
const expansionRate = 5

export const update = () => {
  // checking to see if we are on top of the food, in which case, the snake can eat it!
  if(onSnake(food)){
    expandSnake(expansionRate)
    food = getRandomFoodPosition()
  }
}

// function for drawing snake
export const draw = (gameBoard) => {
    const foodElement = document.createElement('div')
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add('food')
    gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  // loop through to find a value that is not already on the snake
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    // set new food location to random spot on board
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}
