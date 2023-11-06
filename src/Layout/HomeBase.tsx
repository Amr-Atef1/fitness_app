import { Box, Typography, Button } from "@mui/material";
import Vegeta from "../assets/images/Vegeta.jpeg";

export const HomeBase = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        height: "100vh",
        ml: { xs: "55px", md: "100px" },
      }}
    >
      <Typography variant="h4" fontWeight="bold" color="red">
        Fitness Club
      </Typography>
      <Typography
        color="black"
        fontWeight="bold"
        variant="h3"
        lineHeight={1.3}
        textTransform="capitalize"
        my={5}
      >
        sweat, smile <br /> and repeat
      </Typography>
      <Typography variant="h6" fontWeight="500">
        Check out the most effective exercises personalized to you
      </Typography>
      <Button
        sx={{
          color: "#ffffffc2",
          p: 2,
          mt: 5,
          textTransform: "capitalize",
          fontSize: 19,
        }}
        variant="contained"
        color="error"
        onClick={()=>{
          window.scrollTo({top:1150,behavior:'smooth'})
        }}
      >
        Explore Exercises
      </Button>
      <Typography
        sx={{
          opacity: 0.1,
          color: "red",
          fontSize: 200,
          fontWeight: "bold",
          display: { xs: "none", lg: "block" },
        }}
      >
        Exercise
      </Typography>
      <img src={Vegeta} className="vegeta" alt="Vegeta" />
    </Box>
  );
};
