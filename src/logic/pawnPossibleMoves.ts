import {Grid, PlayerColor } from "../types";

export function showPawnPossibleMoves(grid:Grid,id:number,player:PlayerColor):number[]{

    const possibleMoveCellId:number[] = [];

    if(player === PlayerColor.WHITE){
        const oneUpIndex = grid.find(c=>c.id === id-10);
        const leftUpIndex = grid.find(c=>c.id === id-11);
        const rightUpIndex = grid.find(c=>c.id === id-9);


        if(!oneUpIndex?.taken){
            possibleMoveCellId.push(id-10)
            if(id> 70 && id < 80){
                const twoUpIndex = grid.find(c=>c.id === id-20);
                if(!twoUpIndex?.taken){
                    possibleMoveCellId.push(id-20)
                }
            }
        }
        if(leftUpIndex?.taken && leftUpIndex.player === PlayerColor.BLACK){
            possibleMoveCellId.push(id-11)
        }
        if(rightUpIndex?.taken && rightUpIndex.player === PlayerColor.BLACK){
            possibleMoveCellId.push(id-9)
        }
    }


    if(player === PlayerColor.BLACK){
        const oneUpIndex = grid.find(c=>c.id === id+10);
        const leftUpIndex = grid.find(c=>c.id === id+11);
        const rightUpIndex = grid.find(c=>c.id === id+9);

        if(!oneUpIndex?.taken){
            possibleMoveCellId.push(id+10)
            if(id> 20 && id < 30){
                const twoUpIndex = grid.find(c=>c.id === id+20);
                if(!twoUpIndex?.taken){
                    possibleMoveCellId.push(id+20)
                }
            }
        }
        if(leftUpIndex?.taken && leftUpIndex.player === PlayerColor.WHITE){
            possibleMoveCellId.push(id+11)
        }
        if(rightUpIndex?.taken && rightUpIndex.player === PlayerColor.WHITE){
            possibleMoveCellId.push(id+9)
        }
    }
    return possibleMoveCellId;
}