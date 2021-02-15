export enum PlayerColor{
    WHITE="WHITE",BLACK="BLACK"
}

export enum Pawns{
    pawn="PAWN",rook="ROOK",knight="KNIGHT",king="KING",queen="QUEEN",bishop="BISHOP"
}


export interface Cell{
    player?: PlayerColor,
    taken: boolean,
    pawn: Pawns | null,
    id:number,
}

export type Grid = Cell[]