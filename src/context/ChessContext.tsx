import React,{createContext,useContext,useReducer,useState} from 'react'
import {reducer,initialState} from "../reducer/reducer"


export enum Turn{
    WHITE,BLACK
}

interface Props{
    children:React.ReactNode
}

interface Mat{
    white: boolean,
    black: boolean,
}


const ContextProvider = createContext<any>({})

export const ChessContext:React.FC<Props> = ({children}) => {

    const [turn,setTurn] = useState<Turn>(Turn.WHITE);
    const [selectedPawn,setSelectedPawn] = useState<number | null>(null);
  const [possibleMoves, setPossibleMoves] = useState<number[]>([]);
  const [mat, setMat] = useState<Mat>({white:false,black:false});



    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <ContextProvider.Provider value={{state,dispatch,turn,setTurn,
            selectedPawn,setSelectedPawn,possibleMoves,setPossibleMoves,
            mat,setMat}}>
            {children}
        </ContextProvider.Provider>
    )
}

export const useChessContext = ()=> useContext(ContextProvider)

