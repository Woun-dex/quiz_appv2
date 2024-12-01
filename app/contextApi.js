"use client"
import { createContext, useState , useContext , useEffect} from "react";
import axios from "axios";

const ComponentsContext = createContext();

export function ContextProvider({children} ) {
    const [quizLists, setQuizLists] = useState([]);
    const [selectQuizToStart , setSelectQuizToStart]= useState(null); 
    
    useEffect(() => {
        async function fetchData() {
          try {
            const { data } = await axios.get("http://localhost:3030/quizzes");
            setQuizLists(data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
        fetchData();
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