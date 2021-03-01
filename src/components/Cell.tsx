import { memo } from "react";
import { Cell, Turn } from "../types";
import { movePawn } from "../reducer/reducer";
import { useChessContext } from "../context/ChessContextManager";
import { showPossibleMoves } from "../logic";
import { willCheckHandler } from "../logic/checkHandler";
import { pawnToDisplay } from "../helpers/pawnToDispay";
import { cellColor } from "../helpers/cellColor";
import { useDrag, useDrop } from "react-dnd";

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

  const [{ isDragging }, drag] = useDrag({
    item: { type: "cell" },
    collect: (monitor: any) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  const [, drop] = useDrop({
    accept: "cell",

    canDrop: () => possibleMoves.some((posib) => posib === id),
    drop: () => {
      handleMovePawn();
      return undefined;
    },
  });

  const selectHandler = () => {
    // move pawn if selected
    if (selectedPawn !== null && possibleMoves.some((p: number) => p === id)) {
      handleMovePawn();
    }
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

  const handleMovePawn = () => {
    const pawn = grid.find((cell: Cell) => cell.id === selectedPawn);

    if (pawn?.pawn && pawn?.player && selectedPawn) {
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
  };

  const opacity = isDragging ? 0 : 1;

  return (
    <article
      ref={drop}
      data-id={id}
      className={`cell ${cellColor(id)} ${taken ? "taken" : ""}
       ${selectedPawn === id ? "selected" : ""}
       ${possibleMoves.some((p: number) => p === id) ? "possibleMove" : ""}
       ${player === Turn.BLACK ? "black" : "white"}`}
      onMouseDown={selectHandler}>
      <span ref={drag} style={{ opacity }}>
        {pawnToDisplay(pawn)}
      </span>
    </article>
  );
};

export default memo(CellComponent);
