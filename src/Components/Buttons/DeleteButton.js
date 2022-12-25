import React from "react";
import Button from "@mui/material/Button";

const DeleteButton = ({ buttonname, email, showsection }) => {
  const deletefunc = async () => {
    try {
      const deleteinfo = await fetch(
        `http://localhost:5000/userdetails/${email}`,
        {
          method: "DELETE",
        }
      );
      showsection();
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <div>
      <Button
        sx={{
          borderRadius: 3,
          fontSize: 25,
          fontWeight: "bold",
          border: 2,
          ":hover": {
            bgcolor: "#ff1744",
            color: "white",
          },
        }}
        variant="outlined"
        color="primary"
        onClick={() => deletefunc()}
      >
        {buttonname}
      </Button>
    </div>
  );
};

export default DeleteButton;
