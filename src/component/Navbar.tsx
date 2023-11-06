import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../assets/images/Logo.png";
export const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        justifyContent: "start",
        p: "20px 50px",
        gap: { xs: "40px", sm: "122px" },
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Stack fontSize="24px" gap="40px" direction="row" alignItems="center">
        <Link
          style={{ borderBottom: "3px solid #FF2625", color: "#3A1212" }}
          to="/"
        >
          Home
        </Link>
        <a href="#exercise" style={{ color: "#3A1212" }}>
          Exercise
        </a>
      </Stack>
    </Stack>
  );
};
