import React, { useState } from "react";
import Button from "@mui/material/Button";
import EditModal from "../Forms/EditModal";

const EditButton = ({ setsection, buttonname, getdetails, emailid }) => {
  const [open, setOpen] = useState(0);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
            bgcolor: "#ffc400",
            color: "white",
          },
        }}
        variant="outlined"
        color="primary"
        onClick={handleOpen}
      >
        {buttonname}
      </Button>
      <EditModal
        setsection={setsection}
        onClose={handleClose}
        getdetails={getdetails}
        open={open}
        emailid={emailid}
      />
    </div>
  );
};

export default EditButton;
