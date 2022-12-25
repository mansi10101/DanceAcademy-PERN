import React from "react";
import Button from "@mui/material/Button";

const FlowButton = ({ buttontext }) => {
  return (
    <div>
      <Button
        sx={{
          fontWeight: "bold",
          fontSize: 25,
          mt: 3,
          mb: 2,
          border: 2,
          bgcolor: "info.main",
          ":hover": {
            bgcolor: "",
            color: "black",
            fontWeight: 20,
          },
        }}
        type="submit"
        fullWidth
        variant="contained"
      >
        {buttontext}
      </Button>
    </div>
  );
};

export default FlowButton;
