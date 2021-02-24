import React, { useMemo, useReducer, useState } from "react";
import { reducer, initialState } from "../reducer/reducer";
import { Turn } from "../types";
import { ContextProvider } from "./ChessContextManager";

export const ChessContext: React.FC = ({ children }) => {
  const [turn, setTurn] = useState<Turn>(Turn.WHITE);
  const [selectedPawn, setSelectedPawn] = useState<number | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<number[]>([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValues = useMemo(
    () => ({
      state,
      dispatch,
      turn,
      setTurn,
      selectedPawn,
      setSelectedPawn,
      possibleMoves,
      setPossibleMoves,
    }),
    [
      state,
      dispatch,
      turn,
      setTurn,
      selectedPawn,
      setSelectedPawn,
      possibleMoves,
      setPossibleMoves,
    ]
  );

  return (
    <ContextProvider.Provider value={contextValues}>
      {children}
    </ContextProvider.Provider>
  );
};
