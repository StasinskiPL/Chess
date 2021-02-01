import React from "react";
import { Cell, Pawns, PlayerColor } from "../types";
import { FaChessPawn, FaChessBishop, FaChessKnight } from "react-icons/fa";
import { GiChessQueen, GiChessRook, GiChessKing } from "react-icons/gi";
import { movePawn } from "../reducer/reducer";
import { useChessContext, Turn } from "../context/ChessContext";
import { showPossibleMoves } from "../logic";

const CellComponent: React.FC<Cell> = ({ pawn, taken, player, id }) => {
  const {
    selectedPawn,
    setSelectedPawn,
    turn,
    setTurn,
    setPossibleMoves,
    possibleMoves,
    dispatch,
    mat,
    setMat,
    state: { grid },
  } = useChessContext();
  let cellColor = "blackCell";
  if ((id % 20 > 10 && id % 2 === 1) || (id % 20 < 10 && id % 2 === 0)) {
    cellColor = "whiteCell";
  }
  let pawnToDisplay = null;
  if (pawn === Pawns.pawn) {
    pawnToDisplay = <FaChessPawn />;
  } else if (pawn === Pawns.bishop) {
    pawnToDisplay = <FaChessBishop />;
  } else if (pawn === Pawns.king) {
    pawnToDisplay = <GiChessKing />;
  } else if (pawn === Pawns.queen) {
    pawnToDisplay = <GiChessQueen />;
  } else if (pawn === Pawns.rook) {
    pawnToDisplay = <GiChessRook />;
  } else if (pawn === Pawns.knight) {
    pawnToDisplay = <FaChessKnight />;
  }

  const selectHandler = () => {
    if (selectedPawn !== null && possibleMoves.some((p: number) => p === id)) {
      const pawn = grid.find((cell: Cell) => cell.id === selectedPawn);
      dispatch(
        movePawn({
          pawn: pawn.pawn,
          prevCell: selectedPawn,
          nextCell: id,
          playerColor: pawn.player,
        })
      );
      const isMat = showPossibleMoves(pawn.pawn, grid, id, pawn.player).some(
        (id) => {
          const cell: Cell = grid.find((cell: Cell) => cell.id === id);
          if (cell && cell.pawn === Pawns.king) {
            return true;
          }
          return false;
        }
      );
      if (isMat) {
        if (pawn.player === PlayerColor.WHITE) {
          setMat((m: any) => ({ ...m, black: true }));
        } else setMat((m: any) => ({ ...m, white: true }));
      }
      setPossibleMoves([]);
      setSelectedPawn(null);
      setTurn((t: Turn) => (t === Turn.WHITE ? Turn.BLACK : Turn.WHITE));
    }
    //////////////////////////////////
    if (taken && turn === player) {
     if(mat.white || mat.black){
       
     }
      setSelectedPawn(id);
      if (player !== undefined && pawn !== null) {
        setPossibleMoves(showPossibleMoves(pawn, grid, id, player));
      }
    }
  };
  return (
    <article
      className={`cell ${cellColor} ${taken ? "taken" : ""} ${
        selectedPawn === id ? "selected" : ""
      } ${possibleMoves.some((p: number) => p === id) ? "possibleMove" : ""} ${
        player === PlayerColor.BLACK ? "black" : "white"
      }`}
      onClick={selectHandler}
    >
      {pawnToDisplay}
    </article>
  );
};

export default CellComponent;
