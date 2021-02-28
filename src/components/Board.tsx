import { memo, useRef } from "react";
import { useChessContext } from "../context/ChessContextManager";
import { Cell as CellType } from "../types";
import Cell from "./Cell";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Board: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const {
    state: { grid },
  } = useChessContext();

  const [{ isDragging }, drag] = useDrag({
    item: { type: "", id: 1 },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "pawn" ?? "",

    canDrop: () => {
      // console.log(ref.current?.closest("article")?.dataset.id);
      return true;
    },
    drop: () => {
      // console.log(ref.current?.closest("article")?.dataset.id);

      return console.log("wow");
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  return (
    <DndProvider backend={HTML5Backend}>
      <section className="board">
        <div ref={drop} className="board-inner">
          {grid.map((cell: CellType) => (
            <Cell key={cell.id} {...cell} />
          ))}
        </div>
      </section>
    </DndProvider>
  );
};

export default memo(Board);
