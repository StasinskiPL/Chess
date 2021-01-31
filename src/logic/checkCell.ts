import { Grid, PlayerColor } from "../types";

export const checkCell= (grid: Grid,id: number,player: PlayerColor,indicator:number,
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