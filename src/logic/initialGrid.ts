import { Grid, Pawns, PlayerColor } from "../types";

const addPawns = (grid: Grid): Grid => {
  grid = grid.map((cell) => {
    if (cell.id > 20 && cell.id < 29) {
      return {
        ...cell,
        pawn: Pawns.pawn,
        taken: true,
        player: PlayerColor.BLACK,
      };
    }
    if (cell.id > 70 && cell.id < 79) {
      return {
        ...cell,
        pawn: Pawns.pawn,
        taken: true,
        player: PlayerColor.WHITE,
      };
    }

    if (cell.id === 11 || cell.id === 18) {
      return {
        ...cell,
        pawn: Pawns.rook,
        taken: true,
        player: PlayerColor.BLACK,
      };
    }

    if (cell.id === 81 || cell.id === 88) {
      return {
        ...cell,
        pawn: Pawns.rook,
        taken: true,
        player: PlayerColor.WHITE,
      };
    }

    if (cell.id === 12 || cell.id === 17) {
      return {
        ...cell,
        pawn: Pawns.knight,
        taken: true,
        player: PlayerColor.BLACK,
      };
    }
    if (cell.id === 82 || cell.id === 87) {
      return {
        ...cell,
        pawn: Pawns.knight,
        taken: true,
        player: PlayerColor.WHITE,
      };
    }

    if (cell.id === 13 || cell.id === 16) {
      return {
        ...cell,
        pawn: Pawns.bishop,
        taken: true,
        player: PlayerColor.BLACK,
      };
    }
    if (cell.id === 83 || cell.id === 86) {
      return {
        ...cell,
        pawn: Pawns.bishop,
        taken: true,
        player: PlayerColor.WHITE,
      };
    }

    if (cell.id === 14) {
      return {
        ...cell,
        pawn: Pawns.queen,
        taken: true,
        player: PlayerColor.BLACK,
      };
    }
    if (cell.id === 84) {
      return {
        ...cell,
        pawn: Pawns.queen,
        taken: true,
        player: PlayerColor.WHITE,
      };
    }

    if (cell.id === 15) {
      return {
        ...cell,
        pawn: Pawns.king,
        taken: true,
        player: PlayerColor.BLACK,
      };
    }
    if (cell.id === 85) {
      return {
        ...cell,
        pawn: Pawns.king,
        taken: true,
        player: PlayerColor.WHITE,
      };
    }

    return cell;
  });

  return grid;
};

export const initialGrid = (): Grid => {
  let grid = new Array(64).fill({}).map((_, index) => ({
    id: +index.toString(8) + 11,
    player:
      (index % 16 > 8 && index % 2 === 1) || (index % 16 < 8 && index % 2 === 0)
        ? PlayerColor.WHITE
        : PlayerColor.BLACK,
    pawn: null,
    taken: false,
  }));

  return addPawns(grid);
};
