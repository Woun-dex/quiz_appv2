"use client"
import { createContext, useState , useContext , useEffect} from "react";

const ComponentsContext = createContext();

export function ContextProvider({children} ) {
    const [quizLists, setQuizLists] = useState([]);
    const [selectQuizToStart , setSelectQuizToStart]= useState(null); 
    
    useEffect(() => {
        // Example: Save quizzes to localStorage whenever they change
        localStorage.setItem("quizzes", JSON.stringify(quizLists));
      }, [quizLists]);
      
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