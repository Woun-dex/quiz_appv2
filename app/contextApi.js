"use client"
import { createContext, useState , useContext , useEffect} from "react";
import { quizzesData } from "./QuizzesData"

const ComponentsContext = createContext();

export function ContextProvider({children} ) {
    const [quizLists, setQuizLists] = useState([]);
    const [selectQuizToStart , setSelectQuizToStart]= useState(null); 
    
    useEffect(() => {
        setQuizLists(quizzesData);
    }, []);
    return (
        <ComponentsContext.Provider value={{ quizLists,
        setQuizLists ,
        quizToStartObject : {selectQuizToStart , setSelectQuizToStart} }}>
            {children}
        </ComponentsContext.Provider>
    );
}

export default function useComponentContextProvider() {
    return useContext(ComponentsContext);
}