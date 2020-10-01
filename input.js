var inputDirection = { r: 0, c: 0 };
var lastInputDirection = { r: 0, c: 0 };
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (inputDirection.r == 0) inputDirection = { r: -1, c: 0 };
      break;
    case "ArrowDown":
      if (inputDirection.r == 0) inputDirection = { r: 1, c: 0 };
      break;
    case "ArrowLeft":
      if (inputDirection.c == 0) inputDirection = { r: 0, c: -1 };
      break;
    case "ArrowRight":
      if (inputDirection.c == 0) inputDirection = { r: 0, c: 1 };
      break;
  }
});

export function getInputDirection() {
  lastInputDirection = inputDirection;
  return inputDirection;
}
