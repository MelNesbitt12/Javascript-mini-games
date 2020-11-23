let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

window.addEventListener('keydown', event => {
  switch (event.key) {
    case 'ArrowUp':
      //if the snake is currently moving up or down, ignore, because if the snake is already moving up it cannot move down and vice versa
      if(lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: -1 }
      break
    case 'ArrowDown':
      if(lastInputDirection.y !== 0) break
      inputDirection = { x: 0, y: 1 }
      break
    case 'ArrowLeft':
      //if the snake is currently moving right or left, ignore, because if the snake is already moving right it cannot move left and vice versa
      if(lastInputDirection.x !== 0) break
      inputDirection = { x: -1, y: 0 }
      break
    case 'ArrowRight':
      if(lastInputDirection.x !== 0) break
      inputDirection = { x: 1, y: 0 }
      break
  }
})

// function that returns the current position of the snake (x y coordinates)
export const getInputDirection = () => {
  lastInputDirection = inputDirection
  return inputDirection
}
