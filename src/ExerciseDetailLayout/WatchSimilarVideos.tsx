import { similarVideosProp } from "../component/ExerciseDetail";
import { Typography, Box, Stack } from "@mui/material";
import { Loader } from "./Loader";

type WatchSimilarVideosProp = {
  similarVideos: similarVideosProp[];
  name: string;
};

export const WatchSimilarVideos = ({
  similarVideos,
  name,
}: WatchSimilarVideosProp) => {
  if (!similarVideos.length) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} ml={{md:"3rem"}} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#000"
        mb="33px"
      >
        Watch{" "}
        <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>
      <Stack
        sx={{ flexDirection: { md: "row" }, gap:"60px"}}
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
      >
        {similarVideos?.slice(0, 8)?.map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{ borderTopLeftRadius: "20px" }}
              src={item.video.thumbnails[0].url}
              alt={item.video.title}
            />
            <Box px={2}>
              <Typography
                sx={{ fontSize: { lg: "28px", xs: "18px" }, mb:"10px" }}
                fontWeight={600}
                color="#000"
                lineHeight={1.2}
              >
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="gray">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};
