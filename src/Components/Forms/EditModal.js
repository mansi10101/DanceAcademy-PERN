import { Modal, Box, Container } from "@mui/material";
import React from "react";
import FormTitle from "./FormTitle";
import EditForm from "./EditForm";

const EditModal = ({ setsection, emailid, onClose, open, getdetails }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    bgcolor: "black",
    border: "2px solid #000",
    boxShadow: 24,
    maxHeight: '90vh',
    overflow:"auto"
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box component="form" noValidate sx={{ ...style, width: 400 }}>
        <FormTitle title="Edit Student Details" addAbout={onClose} />
        <Container component="main" maxWidth="xs">
          <EditForm
            setsection={setsection}
            emailid={emailid}
            getdetails={getdetails}
          />
        </Container>
      </Box>
    </Modal>
  );
};

export default EditModal;
