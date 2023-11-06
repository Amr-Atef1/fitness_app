import { Stack, Typography } from "@mui/material";
import gym from "../assets/icons/gym.png";
import { UseMyContext } from "../context/ContextProvider";
type BodyPartPropType = {
  item: string
};

export const BodyPart = ({ item }: BodyPartPropType) => {

  const {bodyPart,setBodyPart}=UseMyContext()

  
  return (
    <Stack
      sx={{
        cursor: "pointer",
        width: "270px",
        height: "280px",
        bgcolor: "white",
        border:"none",
        borderTop:bodyPart===item? "4px solid #ff2625":""
      }}
      
      justifyContent="center"
      alignItems="center"
      component="button"
      className="bodyPart-card"
      onClick={()=>{
        setBodyPart(item)
        window.scrollTo({top:1800,behavior:'smooth'})
      }}
    >
      <img
        width="45px"
        height="45px"
        src={gym}
        alt="gym"
        style={{ marginBottom: "30px" }}
      />
      <Typography
        variant="h5"
        sx={{
          textTransform: "capitalize",
          fontSize: "24px",
          fontWeight: "bold",
          color: "#3A1212",
        }}
      >
        {item}
      </Typography>
    </Stack>
  );
};
