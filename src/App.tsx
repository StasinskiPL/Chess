import Board from "./components/Board"
import {ChessContext} from "./context/ChessContext"


function App() {

  return (
    <ChessContext>
    <main>
      <Board/>
    </main>
    </ChessContext>
  );
}

export default App;
