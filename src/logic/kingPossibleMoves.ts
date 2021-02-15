import { Grid, PlayerColor } from "../types";

const checkCell = (
  grid: Grid,
  id: number,
  player: PlayerColor,
  indicator: number
): number => {
  const cell = grid.find((cell) => cell.id === id + indicator);

  if (!cell) {
    return -1;
  }

  if (!cell.taken || cell.player !== player) {
    return cell.id;
  }

  return -1;
};

export function showKingPossibleMoves(
  grid: Grid,
  id: number,
  player: PlayerColor
): number[] {
  const TL = checkCell(grid, id, player, -11);
  const T = checkCell(grid, id, player, -10);
  const TR = checkCell(grid, id, player, -9);

  const L = checkCell(grid, id, player, -1);
  const R = checkCell(grid, id, player, 1);

  const BL = checkCell(grid, id, player, 9);
  const B = checkCell(grid, id, player, 10);
  const BR = checkCell(grid, id, player, 11);

  const possible = [TL, T, TR, BL, B, BR, L, R].filter((p) => p !== -1);

  return possible;
}
