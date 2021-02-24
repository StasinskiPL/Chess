import { Grid, Turn } from "../types";
import { checkCell } from "./checkCell";

export function showRookPossibleMoves(
  grid: Grid,
  id: number,
  player: Turn
): number[] {
  const possibleTop = checkCell(grid, id, player, -10);
  const possibleBottom = checkCell(grid, id, player, 10);
  const possibleRight = checkCell(grid, id, player, 1);
  const possibleLeft = checkCell(grid, id, player, -1);

  const possible = [
    ...possibleTop,
    ...possibleBottom,
    ...possibleLeft,
    ...possibleRight,
  ].filter((p) => p !== -1);

  return possible;
}
