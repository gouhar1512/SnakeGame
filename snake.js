import { getInputDirection } from "./input.js";

export const SNAKE_SPEED = 10;
const EXPANSION_RATE = 1;
const snakeBody = [{ r: 11, c: 11 }];

export function update() {
  const inputDirection = getInputDirection();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].r += inputDirection.r;
  snakeBody[0].c += inputDirection.c;
}

export function draw(gameBoard) {
  snakeBody.forEach((segment) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.r;
    snakeElement.style.gridColumnStart = segment.c;
    snakeElement.classList.add("snake");
    gameBoard.appendChild(snakeElement);
  });
}

export function expandSnake() {
  for (let i = 0; i < EXPANSION_RATE; i++) {
    let snakeTail = getSnakeTail();
    snakeBody.push(snakeTail);
  }
}

export function snakeEatsFood(food) {
  let snakeHead = getSnakeHead();
  return equalPosition(snakeHead, food);
}

export function onSnake(pos) {
  snakeBody.forEach((segment) => {
    if (equalPosition(segment, pos)) {
      return true;
    }
  });
  return false;
}

export function getSnakeHead() {
  return { ...snakeBody[0] };
}
function getSnakeTail() {
  return { ...snakeBody[snakeBody.length - 1] };
}

export function snakeIntersection() {
  let n = snakeBody.length;
  if (n == 2) return false;
  let snakeHead = getSnakeHead();
  for (let i = 1; i < n; i++) {
    if (equalPosition(snakeBody[i], snakeHead)) return true;
  }
  return false;
}

function equalPosition(pos1, pos2) {
  return pos1.r == pos2.r && pos1.c == pos2.c;
}
