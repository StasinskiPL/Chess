import { showPossibleMoves } from ".";
import { Cell, Grid, Pawns, Turn } from "../types";

export const willCheckHandler = (
  grid: Grid,
  prev: number,
  destination: number
): { whiteCheck: boolean; blackCheck: boolean } => {
  let check = {
    whiteCheck: false,
    blackCheck: false,
  };

  grid = swipeCells(grid, prev, destination);

  grid.forEach((cell) => {
    if (cell.taken && cell.pawn && cell.player) {
      const willCheck = showPossibleMoves(
        cell.pawn,
        grid,
        cell.id,
        cell.player,
        false
      ).some((id) => {
        const destination = grid.find((c: Cell) => c.id === id);
        if (destination && destination.pawn === Pawns.king) {
          return true;
        }
        return false;
      });
      if (willCheck) {
        if (cell.player === Turn.WHITE) {
          check = { ...check, blackCheck: true };
        } else {
          check = { ...check, whiteCheck: true };
        }
      }
    }
  });

  return check;
};

const swipeCells = (grid: Grid, prev: number, next: number): Grid => {
  const prevCellId = grid.findIndex((c) => c.id === prev);
  const prevCell = grid.find((c) => c.id === prev);

  const nextCellId = grid.findIndex((c) => c.id === next);
  const nextCell = grid.find((c) => c.id === next);

  const newGrid = grid.slice(0);

  if (prevCellId && prevCell && nextCellId && nextCell) {
    newGrid[prevCellId] = {
      ...prevCell,
      pawn: null,
      taken: false,
      player: undefined,
    };
    newGrid[nextCellId] = {
      ...nextCell,
      pawn: prevCell.pawn,
      taken: true,
      player: prevCell.player,
    };
  }
  return newGrid;
};
