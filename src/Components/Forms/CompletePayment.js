import React, { useState } from "react";
import styles from "../../Stylesheet/Text.module.css";
import { Button } from "@mui/material";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";

const CompletePayment = ({ text }) => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState();
  const [account, setAccount] = useState("");

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 700,
    bgcolor: "black",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const completePayment = () => {
    if (account.length >= 11 && account.length <= 16) {
      setError({
        message: "Payment Sucessfull !!",
        color: "green",
      });
    } else {
      setError({
        message: "Invalid Account Number !!",
        color: "red",
      });
    }
  };

  return (
    <div>
      <Button
        sx={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 2,
          border: 2,
          bgcolor: "success.main",
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

      <Modal
        onClose={handleClose}
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box component="form" noValidate sx={{ ...style, width: 400 }}>
          <h2 id="title" className={styles.formtitle}>
            Payment Form
          </h2>
          <Container component="main" maxWidth="xs">
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
              label="Account Number"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
            />

            {error !== undefined && (
              <p style={{ color: error.color }}>{error.message}</p>
            )}

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
              fullWidth
              variant="contained"
              onClick={completePayment}
            >
              Pay
            </Button>
          </Container>
        </Box>
      </Modal>
    </div>
  );
};

export default CompletePayment;
