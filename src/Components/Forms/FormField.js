import React from "react";
import TextField from "@mui/material/TextField";

const FormField = ({ label, name, id }) => {
  return (
    <div>
      <TextField
        sx={{
          "& .MuiInputLabel-root": { color: "white" },
          "& .MuiOutlinedInput-root": {
            "& > fieldset": { borderColor: "white" },
          },
          input: { color: "white" },
        }}
        margin="normal"
        required
        fullWidth
        id={id}
        label={label}
        name={name}
      />
    </div>
  );
};

export default FormField;
