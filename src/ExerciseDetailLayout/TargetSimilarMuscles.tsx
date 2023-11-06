import { Box, Stack, Typography } from "@mui/material"
import { DataItem } from "../Layout/SearchExercises"
import {  HorizontalScrollbar } from "../Layout"
import { Loader } from "."
type TargetSimilarMusclesProps={
  similarMuscles:DataItem[],
  similarEquipment:DataItem[]
}
export const TargetSimilarMuscles = ({similarMuscles,similarEquipment}:TargetSimilarMusclesProps) => {
  
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {similarMuscles.length !== 0 ? <HorizontalScrollbar<DataItem> data={similarMuscles} /> : <Loader />}
    </Stack>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack direction="row" sx={{ p: 2, position: 'relative' }}>
      {similarEquipment.length !== 0 ? <HorizontalScrollbar<DataItem> data={similarEquipment} /> : <Loader />}
    </Stack>
  </Box>
  
  )
}
