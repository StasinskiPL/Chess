import { memo } from "react";
import { useChessContext } from "../context/ChessContextManager";
import { Cell as CellType } from "../types";
import Cell from "./Cell";
import GameResult from "./GameResult";

const Board: React.FC = () => {
  const {
    state: { grid },
  } = useChessContext();

  return (
    <section className="board">
      <div className="board-inner">
        {grid.map((cell: CellType) => (
          <Cell key={cell.id} {...cell} />
        ))}
      </div>
      <GameResult />
    </section>
  );
};

export default memo(Board);
