import { Grid, PlayerColor } from "../types";


const checkCell= (grid: Grid,id: number,player: PlayerColor,indicator:number,
  ): number[] => {
    const cellTop = grid.find((cell) => cell.id === id + indicator);
  
    if (!cellTop) {
      return [-1];
    }
    if (!cellTop.taken) {
      return [id + indicator, ...checkCell(grid, id + indicator, player,indicator)];
    }
  
    if (cellTop.taken && cellTop.player !== player) {
      return [id + indicator];
    } else {
      return [-1];
    }
  };


export function showBishopPossibleMoves(
    grid: Grid,
    id: number,
    player: PlayerColor
  ): number[] {
    const possibleTopLeft = checkCell(grid, id, player,-11);
    const possibleTopRight = checkCell(grid, id, player,-9);
    const possibleBottomLeft = checkCell(grid, id, player,9);
    const possibleBottomRight = checkCell(grid, id, player,+11);
  
    const possible = [
      ...possibleTopLeft,
      ...possibleTopRight,
      ...possibleBottomLeft,
      ...possibleBottomRight,
    ].filter((p) => p !== -1);
  
    return possible;
  }
  