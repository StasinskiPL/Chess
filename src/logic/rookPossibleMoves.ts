import { Grid, PlayerColor } from "../types";



// i will combine that 4 functions into one in the future

const checkCellTop = (
  grid: Grid,
  id: number,
  player: PlayerColor
): number[] => {
  const cellTop = grid.find((cell) => cell.id === id - 10);

  if (!cellTop) {
    return [-1];
  }
  if (!cellTop.taken) {
    return [id - 10, ...checkCellTop(grid, id - 10, player)];
  }

  if (cellTop.taken && cellTop.player !== player) {
    return [id - 10];
  } else {
    return [-1];
  }
};

const checkCellBottom = (
  grid: Grid,
  id: number,
  player: PlayerColor
): number[] => {
  const cellTop = grid.find((cell) => cell.id === id + 10);

  if (!cellTop) {
    return [-1];
  }
  if (!cellTop.taken) {
    return [id + 10, ...checkCellBottom(grid, id + 10, player)];
  }

  if (cellTop.taken && cellTop.player !== player) {
    return [id + 10];
  } else {
    return [-1];
  }
};

const checkCellLeft = (
  grid: Grid,
  id: number,
  player: PlayerColor
): number[] => {
  const cellTop = grid.find((cell) => cell.id === id - 1);

  if (!cellTop) {
    return [-1];
  }
  if (!cellTop.taken) {
    return [id - 1, ...checkCellLeft(grid, id - 1, player)];
  }

  if (cellTop.taken && cellTop.player !== player) {
    return [id - 1];
  } else {
    return [-1];
  }
};

const checkCellRight = (
  grid: Grid,
  id: number,
  player: PlayerColor
): number[] => {
  const cellTop = grid.find((cell) => cell.id === id + 1);

  if (!cellTop) {
    return [-1];
  }
  if (!cellTop.taken) {
    return [id + 1, ...checkCellRight(grid, id + 1, player)];
  }

  if (cellTop.taken && cellTop.player !== player) {
    return [id + 1];
  } else {
    return [-1];
  }
};

export function showRookPossibleMoves(
  grid: Grid,
  id: number,
  player: PlayerColor
): number[] {
  const possibleTop = checkCellTop(grid, id, player);
  const possibleBottom = checkCellBottom(grid, id, player);
  const possibleLeft = checkCellLeft(grid, id, player);
  const possibleRight = checkCellRight(grid, id, player);

  const possible = [
    ...possibleTop,
    ...possibleBottom,
    ...possibleLeft,
    ...possibleRight,
  ].filter((p) => p !== -1);

  return possible;
}
