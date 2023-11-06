import { Box, Typography, Stack, Pagination } from "@mui/material";
import { useEffect, useState } from "react";
import { UseMyContext } from "../context/ContextProvider";
import { ExerciseCard } from ".";
import { fetchData } from "../api/FetchExercises";

export const Exercises = () => {
  const { exerciseResult, setExerciseResult, bodyPart } = UseMyContext();
  

  const [currentPage, setCurrentPage] = useState(1);
  const exercisePerPage = 9;
  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;
  const exercisesAvailable = exerciseResult.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const handleChange = (_e: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: "smooth" });
  };
  useEffect(()=>{
    const fetchExerciseData= async()=>{
      let exerciseData =[]
      if(bodyPart==="all"){
        exerciseData= await fetchData("exercises")
      }else{
        exerciseData= await fetchData(`exercises/bodyPart/${bodyPart}`)
      }
      setExerciseResult(exerciseData)
    }
    fetchExerciseData()
  },[bodyPart])
  return (
    <Box sx={{ p: "25px", mb: "30px" }}>
      <Typography mb="30px" variant="h4" fontWeight="bold">
        Showing Results
      </Typography>
      <Stack
        gap="40px"
        direction="row"
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center"
      >
        {exercisesAvailable.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack mt="100px" alignItems="center">
        {exerciseResult?.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exerciseResult?.length / exercisePerPage)}
            page={currentPage}
            onChange={handleChange}
          />
        )}
      </Stack>
    </Box>
  );
};
