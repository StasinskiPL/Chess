import { Grid, Pawns, Turn } from "../types";
import { showBishopPossibleMoves } from "./bishopPossibleMoves";
import { willCheckHandler } from "./checkHandler";
import { showKingPossibleMoves } from "./kingPossibleMoves";
import { showKnightPossibleMoves } from "./knightPossibleMoves";
import { showPawnPossibleMoves } from "./pawnPossibleMoves";
import { showQuennPossibleMoves } from "./quennPossibleMoves";
import { showRookPossibleMoves } from "./rookPossibleMoves";

export const showPossibleMoves = (
  pawn: Pawns,
  grid: Grid,
  id: number,
  player: Turn,
  filter: boolean
): number[] => {
  let possibleMoves: number[] = [];
  if (pawn === Pawns.pawn) {
    possibleMoves = showPawnPossibleMoves(grid, id, player);
  } else if (pawn === Pawns.rook) {
    possibleMoves = showRookPossibleMoves(grid, id, player);
  } else if (pawn === Pawns.bishop) {
    possibleMoves = showBishopPossibleMoves(grid, id, player);
  } else if (pawn === Pawns.queen) {
    possibleMoves = showQuennPossibleMoves(grid, id, player);
  } else if (pawn === Pawns.knight) {
    possibleMoves = showKnightPossibleMoves(grid, id, player);
  } else if (pawn === Pawns.king) {
    possibleMoves = showKingPossibleMoves(grid, id, player);
  }

  if (!filter) {
    return possibleMoves;
  } else {
    return possibleMoves.filter((destination) => {
      const { whiteCheck, blackCheck } = willCheckHandler(
        grid,
        id,
        destination
      );
      if (
        (player === Turn.WHITE && whiteCheck) ||
        (player === Turn.BLACK && blackCheck)
      ) {
        return false;
      }
      return true;
    });
  }
};
