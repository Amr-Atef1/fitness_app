import { Box } from "@mui/material"
import { Exercises, HomeBase, SearchExercises } from "../Layout"

export const Home = () => {
  return (
    <Box>
      <HomeBase/>
      <SearchExercises/>
      <Exercises/>
    </Box>
  )
}
