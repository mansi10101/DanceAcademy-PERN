import React from "react";
import Button from "@mui/material/Button";

const CheckButton = ({ buttonname, addChForm }) => {
  return (
    <div>
      <Button
        sx={{
          borderRadius: 3,
          fontSize: 25,
          fontWeight: "bold",
          border: 2,
          ":hover": {
            bgcolor: "info.main",
            color: "white",
          },
        }}
        variant="outlined"
        color="primary"
        onClick={addChForm}
      >
        {buttonname}
      </Button>
    </div>
  );
};

export default CheckButton;
