import { createContext, useContext } from "react";
import { State, Turn } from "../types";
import { Action, initialState } from "../reducer/reducer";

export type ContextTypes = {
  state: State;
  dispatch: React.Dispatch<Action>;
  turn: Turn;
  setTurn: (u: React.SetStateAction<Turn>) => void;
  selectedPawn: number | null;
  setSelectedPawn: (u: React.SetStateAction<number | null>) => void;
  possibleMoves: number[];
  setPossibleMoves: (u: React.SetStateAction<number[]>) => void;
};

const contextInitialState: ContextTypes = {
  state: initialState,
  dispatch: () => void 0,
  turn: Turn.WHITE,
  setTurn: () => void 0,
  selectedPawn: null,
  setSelectedPawn: () => void 0,
  possibleMoves: [],
  setPossibleMoves: () => void 0,
};

export const ContextProvider = createContext<ContextTypes>(contextInitialState);

export const useChessContext = () => useContext(ContextProvider);
