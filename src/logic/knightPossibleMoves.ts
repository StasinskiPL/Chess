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

export function showKnightPossibleMoves(
  grid: Grid,
  id: number,
  player: PlayerColor
): number[] {
  let TL = -1,
    TR = -1,
    BL = -1,
    BR = -1,
    LT = -1,
    LB = -1,
    RT = -1,
    RB = -1;
  if (id > 30) {
    TL = checkCell(grid, id, player, -21);
    TR = checkCell(grid, id, player, -19);
  }
  if (id < 70) {
    BL = checkCell(grid, id, player, +21);
    BR = checkCell(grid, id, player, +19);
  }
  if (id % 10 > 2) {
    LT = checkCell(grid, id, player, -12);
    LB = checkCell(grid, id, player, +8);
  }

  if (id % 10 < 7) {
    RT = checkCell(grid, id, player, -8);
    RB = checkCell(grid, id, player, +12);
  }

  const possible = [TL, TR, BL, BR, LT, LB, RT, RB].filter((p) => p !== -1);

  return possible;
}
