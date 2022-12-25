import React from "react";
import Button from "@mui/material/Button";

const EnChButton = ({ buttonname, addForm }) => {
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
        onClick={addForm}
      >
        {buttonname}
      </Button>
    </div>
  );
};

export default EnChButton;
