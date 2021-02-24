export enum Pawns {
  pawn = "PAWN",
  rook = "ROOK",
  knight = "KNIGHT",
  king = "KING",
  queen = "QUEEN",
  bishop = "BISHOP",
}

export interface Cell {
  player?: Turn;
  taken: boolean;
  pawn: Pawns | null;
  id: number;
}

export type Grid = Cell[];

export type State = {
  grid: Grid;
};

export enum Turn {
  WHITE = "WHITE",
  BLACK = "BLACK",
}
