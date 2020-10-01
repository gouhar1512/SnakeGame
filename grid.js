const GRID_SIZE = 40;
export function randomGridPosition() {
  return {
    r: Math.floor(Math.random() * GRID_SIZE) + 1,
    c: Math.floor(Math.random() * GRID_SIZE) + 1,
  };
}

export function outsideGrid(position) {
  return (
    position.r < 1 ||
    position.r > GRID_SIZE ||
    position.c < 1 ||
    position.c > GRID_SIZE
  );
}
