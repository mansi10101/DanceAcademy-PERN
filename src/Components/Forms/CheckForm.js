import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../../Stylesheet/Text.module.css";
import FormField from "./FormField";
import { useState } from "react";
import FormTitle from "./FormTitle.js";

const EnrollForm = ({ addAbout }) => {
  const [error, setError] = useState("");

  function ValidateEmail(input) {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.match(validRegex)) {
      return true;
    } else {
      return false;
    }
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!ValidateEmail(data.get("email")) || data.get("email") === undefined) {
      setError("Invalid email address !!");
    } else {
      setError("");
      console.log({
        email: data.get("email"),
      });
    }
  };
  return (
    <div className={styles.formcontainer}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            onSubmit={handleSubmit}
            component="form"
            noValidate
            sx={{ color: "white" }}
          >
            <FormTitle title="Enrolled Student Form" addAbout={addAbout} />

            <FormField id="email" label="Email Address" name="email" />

            {error}

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
              Submit
            </Button>
          </Box>
        </Container>
      </ThemeProvider>
    </div>
  );
};

export default EnrollForm;
