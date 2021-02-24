import Board from "./components/Board";
import { ChessContext } from "./context/ChessContext";

function App() {
  return (
    <ChessContext>
      <Board />
    </ChessContext>
  );
}

export default App;
