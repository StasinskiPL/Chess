import { initialGrid } from "../logic/initialGrid";
import { Grid, Pawns, PlayerColor } from "../types";

type State = {
  grid: Grid;
};

const MOVEPAWN = "MOVEPAWN";

interface MovePawnType {
  type: typeof MOVEPAWN;
  payload: {
    pawn: Pawns;
    prevCell: number;
    nextCell: number;
    playerColor: PlayerColor;
  };
}

type Action = MovePawnType;

export const movePawn = ({
  pawn,
  prevCell,
  nextCell,
  playerColor,
}: {
  pawn: Pawns;
  prevCell: number;
  nextCell: number;
  playerColor: PlayerColor;
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

export const initialState = {
  grid: initialGrid(),
};

export const reducer = (state: State = initialState, action: Action): State => {
  if (action.type === MOVEPAWN) {
    const newGrid = state.grid.map((cell) => {
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
    return {
      ...state,
      grid: newGrid,
    };
  }

  return {
    ...state,
  };
};
