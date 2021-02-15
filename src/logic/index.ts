import { Grid, Pawns, PlayerColor } from "../types";
import { showBishopPossibleMoves } from "./bishopPossibleMoves";
import { showKingPossibleMoves } from "./kingPossibleMoves";
import { showKnightPossibleMoves } from "./knightPossibleMoves";
import { showPawnPossibleMoves } from "./pawnPossibleMoves";
import { showQuennPossibleMoves } from "./quennPossibleMoves";
import { showRookPossibleMoves } from "./rookPossibleMoves";

export const showPossibleMoves = (
  pawn: Pawns,
  grid: Grid,
  id: number,
  player: PlayerColor
): number[] => {
  if (pawn === Pawns.pawn) {
    return showPawnPossibleMoves(grid, id, player)
  }
  if (pawn === Pawns.rook) {
    return showRookPossibleMoves(grid, id, player);
  }
  if (pawn === Pawns.bishop) {
    return showBishopPossibleMoves(grid, id, player);
  }
  if (pawn === Pawns.queen) {
    return showQuennPossibleMoves(grid, id, player);
  }
  if (pawn === Pawns.knight) {
    return showKnightPossibleMoves(grid, id, player);
  }
  if (pawn === Pawns.king) {
    return showKingPossibleMoves(grid, id, player);
  }
  return [];
};
