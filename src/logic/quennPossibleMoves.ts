import { Grid, Turn } from "../types";
import { checkCell } from "./checkCell";

export function showQuennPossibleMoves(
  grid: Grid,
  id: number,
  player: Turn
): number[] {
  const possibleTopLeft = checkCell(grid, id, player, -11);
  const possibleTopRight = checkCell(grid, id, player, -9);
  const possibleBottomLeft = checkCell(grid, id, player, 9);
  const possibleBottomRight = checkCell(grid, id, player, +11);
  const possibleTop = checkCell(grid, id, player, -10);
  const possibleBottom = checkCell(grid, id, player, 10);
  const possibleRight = checkCell(grid, id, player, 1);
  const possibleLeft = checkCell(grid, id, player, -1);

  const possible = [
    ...possibleTopLeft,
    ...possibleTopRight,
    ...possibleBottomLeft,
    ...possibleBottomRight,
    ...possibleTop,
    ...possibleBottom,
    ...possibleBottom,
    ...possibleRight,
    ...possibleLeft,
  ].filter((p) => p !== -1);

  return possible;
}
