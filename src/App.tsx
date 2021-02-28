import { memo } from "react";
import { DndProvider } from "react-dnd";

import Board from "./components/Board";
import { ChessContext } from "./context/ChessContext";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <ChessContext>
      <DndProvider backend={HTML5Backend}>
        <Board />
      </DndProvider>
    </ChessContext>
  );
}

export default memo(App);
