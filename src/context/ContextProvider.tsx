import { createContext, useContext, useState } from "react";
import { DataItem } from "../Layout/SearchExercises";

type contextProp = {
  children: React.ReactNode;
};
type createContextProp = {
  bodyPart: string;
  setBodyPart: React.Dispatch<React.SetStateAction<string>>;
  setExerciseResult: React.Dispatch<React.SetStateAction<DataItem[]>>;
  exerciseResult:DataItem[]
};
const myContext = createContext({} as createContextProp);
export const UseMyContext = () => {
  return useContext(myContext)
};

export const ContextProvider = ({ children }: contextProp) => {
  const [bodyPart, setBodyPart] = useState("all");
  const [exerciseResult, setExerciseResult] = useState([] as DataItem[]);
  return (
    <myContext.Provider value={{ bodyPart, setBodyPart, setExerciseResult,exerciseResult }}>
      {children}
    </myContext.Provider>
  );
};
