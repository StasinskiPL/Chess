import { showPossibleMoves } from ".";
import { Grid, Turn } from "../types";

export const isMat = (
  grid: Grid
):
  | false
  | {
      gameResult: "White Won" | "Black Won";
      gameFinished: true;
    } => {
  console.log(grid);
  const whiteMat = grid
    .filter((cell) => cell.player === Turn.WHITE && cell.pawn)
    .every((cell) => {
      let posible;
      if (cell?.pawn) {
        posible = showPossibleMoves(cell.pawn, grid, cell.id, Turn.WHITE, true)
          .length;
      }
      return posible === 0;
    });
  const blackMat = grid
    .filter((cell) => cell.player === Turn.BLACK && cell.pawn)
    .every((cell) => {
      console.log(cell);
      let posible;
      if (cell?.pawn) {
        posible = showPossibleMoves(cell.pawn, grid, cell.id, Turn.BLACK, true)
          .length;
      }
      return posible === 0;
    });

  console.log(whiteMat);
  console.log(blackMat);

  if (whiteMat || blackMat) {
    return {
      gameResult: blackMat ? "White Won" : "Black Won",
      gameFinished: true,
    };
  } else {
    return false;
  }
};
