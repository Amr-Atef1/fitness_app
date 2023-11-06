import { Box, TextField, Stack, Typography, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { fetchData } from "../api/FetchExercises";
import { HorizontalScrollbar } from ".";
import { UseMyContext } from "../context/ContextProvider";

export type DataItem = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  instructions: string[];
  name: string;
  secondaryMuscles: string[];
  target: string;
};

export const SearchExercises = () => {
  const [value, setValue] = useState("");
  const [bodyPartList, setBodyPartList] = useState<string[]>([]);
  const {setExerciseResult} = UseMyContext()

  // useEffect HOOK Fetch data
  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartListFun = await fetchData("exercises/bodyPartList");
      setBodyPartList(["all", ...bodyPartListFun]);
    };
    fetchExercisesData();
  }, []);
  // OnSubmit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (value) {
      const data = await fetchData(`exercises`);
     

      const choosenExercise = data.filter((d: DataItem) => {
        return (
          d.bodyPart.toLowerCase().includes(value) ||
          d.equipment.toLowerCase().includes(value) ||
          d.name.toLowerCase().includes(value) ||
          d.target.toLowerCase().includes(value)
        );
      });
      setValue("");
      setExerciseResult(choosenExercise);
    }
  };
  return (
    <Stack id="exercise" justifyContent="center" alignItems="center" direction="column">
      <Typography
        pt={5}
        my="50px"
        sx={{
          textAlign: "center",
          fontSize: { xs: 35, md: 50 },
          fontWeight: "bold",
        }}
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box sx={{mb:'30px'}} component="form" onSubmit={handleSubmit} display="flex" px={2}>
        <TextField
          placeholder="Search Exercises..."
          value={value}
          onChange={(e) => {
            setValue(e.target.value.toLowerCase());
          }}
          sx={{
            input: {
              border: "none",
              borderRadius: "5px",
              fontWeight: "bold",
              fontSize: "20px",
            },
            width: { xs: "100%", sm: "350px", md: "700px", xl: "1100px" },
            backgroundColor: "white",
          }}
        />
        <Button
          type="submit"
          variant="contained"
          color="error"
          sx={{
            textTransform: "capitalize",
            borderRadius: "5px",
            px: 6,
            fontSize: 20,
          }}
        >
          Search
        </Button>
      </Box>
      <Box sx={{  width: "100%", p: "1rem", position: "relative",alignItems:"center",overflowX:"auto" }}>
        <HorizontalScrollbar bodyPartsData  data={bodyPartList} />
      </Box>
    </Stack>
  );
};
