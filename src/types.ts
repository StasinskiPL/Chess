export enum PlayerColor{
    WHITE,BLACK
}

export enum Pawns{
    pawn,rook,knight,king,queen,bishop
}


export interface Cell{
    player?: PlayerColor,
    taken: boolean,
    pawn: Pawns | null,
    id:number,
}

export type Grid = Cell[]