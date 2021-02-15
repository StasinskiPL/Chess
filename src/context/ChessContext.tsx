import React, { createContext, useContext, useReducer, useState } from "react";
import { reducer, initialState } from "../reducer/reducer";

export enum Turn {
  WHITE = "WHITE",
  BLACK = "BLACK",
}

interface Props {
  children: React.ReactNode;
}

const ContextProvider = createContext<any>({});

export const ChessContext: React.FC<Props> = ({ children }) => {
  const [turn, setTurn] = useState<Turn>(Turn.WHITE);
  const [selectedPawn, setSelectedPawn] = useState<number | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<number[]>([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContextProvider.Provider
      value={{
        state,
        dispatch,
        turn,
        setTurn,
        selectedPawn,
        setSelectedPawn,
        possibleMoves,
        setPossibleMoves,
      }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export const useChessContext = () => useContext(ContextProvider);
