import { Grid, Turn } from "../types";
import { checkCell } from "./checkCell";

export function showBishopPossibleMoves(
  grid: Grid,
  id: number,
  player: Turn
): number[] {
  const possibleTopLeft = checkCell(grid, id, player, -11);
  const possibleTopRight = checkCell(grid, id, player, -9);
  const possibleBottomLeft = checkCell(grid, id, player, 9);
  const possibleBottomRight = checkCell(grid, id, player, +11);

  const possible = [
    ...possibleTopLeft,
    ...possibleTopRight,
    ...possibleBottomLeft,
    ...possibleBottomRight,
  ].filter((p) => p !== -1);

  return possible;
}
