import { Grid, PlayerColor } from "../types";

export const checkCell= (grid: Grid,id: number,player: PlayerColor,indicator:number,
    ): number[] => {
      const destination = grid.find((cell) => cell.id === id + indicator);
    
      if (!destination) {
        return [-1];
      }
      if (!destination.taken) {
        return [id + indicator, ...checkCell(grid, id + indicator, player,indicator)];
      }
    
      if (destination.taken && destination.player !== player) {
        return [id + indicator];
      } else {
        return [-1];
      }
    };