import { Box, Typography } from "@mui/material";
import { BodyPart, ExerciseCard } from ".";
import rightArrow from "../assets/icons/right-arrow.png";
import leftArrow from "../assets/icons/left-arrow.png";
import { DataItem } from "./SearchExercises";
import { useRef } from "react";

type propType<T> = {
  data: T[];
  bodyPartsData?: boolean;
};

const RightArrow = ({ scrollContainerRef }: { scrollContainerRef: React.RefObject<HTMLDivElement> }) => {
  const scrollNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += 1800;
    }
  };

  return (
    <Typography onClick={scrollNext} className="right-arrow">
      <img src={rightArrow} alt="right-arrow" />
    </Typography>
  );
};


const LeftArrow = ({ scrollContainerRef }: { scrollContainerRef: React.RefObject<HTMLDivElement> }) => {
  const scrollPrev = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft -= 1800;
    }
  };

  return (
    <Typography onClick={scrollPrev} className="left-arrow">
      <img src={leftArrow} alt="Left-arrow" />
    </Typography>
  );
};

export const HorizontalScrollbar = <T,>({
  data,
  bodyPartsData,
}: propType<T>) => {
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <LeftArrow scrollContainerRef={scrollContainerRef}/>
      <Box
        component={"div"}
        ref={scrollContainerRef}
        sx={{width: "100%",overflowX: "scroll", scrollBehavior: "smooth",display:"flex",flexDirection:"row" }}
      >
        {data.map((item, index) => (
          <Box key={index} component={"div"} sx={{ mx: {xs:"15px",md:"25px",lg:"40px"},py:"30px" }}>
            {bodyPartsData ? (
              <BodyPart item={item as string} />
            ) : (
              <ExerciseCard exercise={item as DataItem} />
            )}
          </Box>
        ))}
      </Box>
      <RightArrow scrollContainerRef={scrollContainerRef}/>
    </>
  );
};
