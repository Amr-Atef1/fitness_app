import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData, fetchVideos } from "../api/FetchExercises";
import {
  ExerciseDetailHome,
  TargetSimilarMuscles,
  WatchSimilarVideos,
} from "../ExerciseDetailLayout";
import { DataItem } from "../Layout/SearchExercises";


export type similarVideosProp = {
  video: {
    channelId: string;
    channelName: string;
    thumbnails: {
      height: number;
      url: string;
      width: number;
    }[];
    title: string;
    videoId: string;
  };
};

export const ExerciseDetail = () => {
  const [exerciseDetails, setExerciseDetails] = useState({} as DataItem);
  const [similarVideos, setSimilarVideos] = useState([] as similarVideosProp[]);
  const [similarMuscles,setSimilarMuscles] = useState([] as DataItem[])
  const [similarEquipment,setSimilarEquipment] = useState([] as DataItem[])


  const { id } = useParams();
  useEffect(() => {
    const fetchExerciseById = async () => {
      const exerciseDetailById = await fetchData(`exercises/exercise/${id}`);
      setExerciseDetails(exerciseDetailById);
    };
    fetchExerciseById();
  }, [id]);
  useEffect(() => {
    // Fetch similar videos here, using exerciseDetails
    const fetchSimilarVideos = async () => {
      if (exerciseDetails?.name) {
        const similarVideosByQuery = await fetchVideos(
          `search?query=${exerciseDetails.name}`
        );
        setSimilarVideos(similarVideosByQuery.contents);
      }
    };

    // Check if exerciseDetails.name is available before fetching videos
    if (exerciseDetails?.name) {
      fetchSimilarVideos();
    }
  }, [exerciseDetails]);
  useEffect(()=>{
    const fetchSimilarMuscles = async () => {
      if(exerciseDetails.target){
      const similarMusclesByTarget = await fetchData(`exercises/target/${exerciseDetails.target}`)
      setSimilarMuscles(similarMusclesByTarget)
      }
    }
    if(exerciseDetails.target){
      fetchSimilarMuscles();
    }
  },[exerciseDetails])
  useEffect(()=>{
    const fetchEquipmentMuscles = async () => {
      if(exerciseDetails.equipment){
      const similarEquipmentByTarget = await fetchData(`exercises/equipment/${exerciseDetails.equipment}`)
      setSimilarEquipment(similarEquipmentByTarget)
      }
    }
    if(exerciseDetails.equipment){
      fetchEquipmentMuscles();
    }
  },[exerciseDetails])

  return (
    <Box>
      <ExerciseDetailHome exerciseDetails={exerciseDetails} />
      <WatchSimilarVideos similarVideos={similarVideos} name={exerciseDetails.name} />
      <TargetSimilarMuscles similarMuscles={similarMuscles} similarEquipment={similarEquipment} />
    </Box>
  );
};
