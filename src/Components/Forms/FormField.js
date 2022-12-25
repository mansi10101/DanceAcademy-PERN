import React from "react";
import TextField from "@mui/material/TextField";

const FormField = ({ onChange, defaultValue, name, label, id }) => {
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
        onChange={onChange}
        defaultValue={defaultValue}
        name={name}
        label={label}
      />
    </div>
  );
};

export default FormField;
