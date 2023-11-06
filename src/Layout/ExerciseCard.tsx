import { Stack, Typography, Button } from "@mui/material";
import { DataItem } from "./SearchExercises";
import { Link } from "react-router-dom";

type ExerciseCardProp = {
  exercise: DataItem;
};
export const ExerciseCard = ({ exercise }: ExerciseCardProp) => {
  return (
    <Link className="exercise-card" to={`/exercises/${exercise.id}`}>
      <img
        style={{ height: "300px" }}
        src={exercise?.gifUrl}
        alt="gifUrl"
        loading="lazy"
      />
      <Stack direction="row" gap="21px">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            fontSize: "14px",
            backgroundColor: "#ffa9a9",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.bodyPart}
        </Button>
        <Button
          sx={{
            color: "#fff",
            fontSize: "14px",
            backgroundColor: "#fcc757",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.target}
        </Button>
      </Stack>
      <Typography
        variant="h5"
        sx={{
          textTransform: "capitalize",
          fontWeight: "bold",
          color: "black",
          ml:"21px"
        }}
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};
