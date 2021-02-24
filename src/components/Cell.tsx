import { Cell, Pawns, Turn } from "../types";
import { FaChessPawn, FaChessBishop, FaChessKnight } from "react-icons/fa";
import { GiChessQueen, GiChessRook, GiChessKing } from "react-icons/gi";
import { movePawn } from "../reducer/reducer";
import { useChessContext } from "../context/ChessContextManager";
import { showPossibleMoves } from "../logic";
import { willCheckHandler } from "../logic/checkHandler";

const CellComponent: React.FC<Cell> = ({ pawn, taken, player, id }) => {
  const {
    selectedPawn,
    setSelectedPawn,
    turn,
    setTurn,
    setPossibleMoves,
    possibleMoves,
    dispatch,
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
    // move pawn if selected
    if (selectedPawn !== null && possibleMoves.some((p: number) => p === id)) {
      const pawn = grid.find((cell: Cell) => cell.id === selectedPawn);

      if (pawn && pawn.pawn && pawn.player) {
        dispatch(
          movePawn({
            pawn: pawn.pawn,
            prevCell: selectedPawn,
            nextCell: id,
            playerColor: pawn.player,
          })
        );
      }
      setPossibleMoves([]);
      setSelectedPawn(null);
      setTurn((t: Turn) => (t === Turn.WHITE ? Turn.BLACK : Turn.WHITE));
    }
    //////////////////////////////////
    // select pawn
    if (taken && turn === player && pawn) {
      setSelectedPawn(id);
      setPossibleMoves(
        showPossibleMoves(pawn, grid, id, player).filter((destination) => {
          const { whiteMat, blackMat } = willCheckHandler(
            grid,
            id,
            destination
          );
          if (
            (player === Turn.WHITE && whiteMat) ||
            (player === Turn.BLACK && blackMat)
          ) {
            return false;
          }
          return true;
        })
      );
    }
  };
  return (
    <article
      className={`cell ${cellColor} ${taken ? "taken" : ""} ${
        selectedPawn === id ? "selected" : ""
      } ${possibleMoves.some((p: number) => p === id) ? "possibleMove" : ""} ${
        player === Turn.BLACK ? "black" : "white"
      }`}
      onClick={selectHandler}>
      {pawnToDisplay}
    </article>
  );
};

export default CellComponent;
