import React, { useState } from "react";
import { Button } from "@mui/material";
import PaymentModal from "./PaymentModal";

const CompletePayment = ({ text, response, email }) => {
  const [open, setOpen] = useState(false);

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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
          fontWeight: "bold",
          marginTop: 2,
          marginLeft: 10,
          border: 2,
          color: "white",
          bgcolor: "info.main",
          ":hover": {
            bgcolor: "",
            color: "white",
          },
        }}
        variant="outlined"
        onClick={handleOpen}
      >
        {text}
      </Button>
      <PaymentModal
        onClose={handleClose}
        open={open}
        response={response}
        email={email}
      />
    </div>
  );
};

export default CompletePayment;
