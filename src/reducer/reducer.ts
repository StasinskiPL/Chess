import { initialGrid } from "../logic/initialGrid";
import { isMat } from "../logic/isMat";
import { State, Pawns, Turn, Grid } from "../types";

const MOVEPAWN = "MOVEPAWN";

interface MovePawnType {
  type: typeof MOVEPAWN;
  payload: {
    pawn: Pawns;
    prevCell: number;
    nextCell: number;
    playerColor: Turn;
  };
}

export type Action = MovePawnType;

export const movePawn = ({
  pawn,
  prevCell,
  nextCell,
  playerColor,
}: {
  pawn: Pawns;
  prevCell: number;
  nextCell: number;
  playerColor: Turn;
}): MovePawnType => {
  return {
    type: MOVEPAWN,
    payload: {
      pawn,
      prevCell,
      nextCell,
      playerColor,
    },
  };
};

export const initialState: State = {
  grid: initialGrid(),
  gameResult: null,
  gameFinished: false,
};

export const reducer = (state: State = initialState, action: Action): State => {
  if (action.type === MOVEPAWN) {
    const newGrid: Grid = state.grid.map((cell) => {
      if (cell.id === action.payload.prevCell) {
        return {
          ...cell,
          pawn: null,
          taken: false,
          player: undefined,
        };
      }
      if (cell.id === action.payload.nextCell) {
        return {
          ...cell,
          pawn: action.payload.pawn,
          taken: true,
          player: action.payload.playerColor,
        };
      }
      return cell;
    });
    const isMatResult = isMat(newGrid);
    if (isMatResult) {
      return {
        ...state,
        grid: newGrid,
        gameResult: isMatResult.gameResult,
        gameFinished: isMatResult.gameFinished,
      };
    }
    return {
      ...state,
      grid: newGrid,
    };
  }

  return {
    ...state,
  };
};
