import { useChessContext } from "../context/ChessContextManager";

const GameResult: React.FC = () => {
  const {
    state: { gameFinished, gameResult },
  } = useChessContext();

  if (!gameFinished) {
    return null;
  }

  return (
    <div>
      <h2>{gameResult}</h2>
    </div>
  );
};

export default GameResult;
