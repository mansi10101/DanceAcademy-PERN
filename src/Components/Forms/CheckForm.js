import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import styles from "../../Stylesheet/Text.module.css";
import FormField from "./FormField";
import { useState } from "react";
import FormTitle from "./FormTitle.js";
import FlowButton from "../Buttons/FlowButton";
import { validateEmail } from "../../utils/helper.js";
import Studentinfo from "./Studentinfo";

const CheckForm = ({ addAbout }) => {
  const [error, setError] = useState("");
  const [Getdetails, setGetdetails] = useState([]);
  const [section, setSection] = useState("1");

  const theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (!validateEmail(data.get("email")) || data.get("email") === undefined) {
      setError("Invalid email address !!");
    } else {
      setError("");
      var email = data.get("email");

      const response = await fetch(
        `http://localhost:5000/userdetails/${email}`
      );
      const jsondata = await response.json();

      console.log(response);

      setGetdetails(jsondata);
      setSection("2");
    }
  };
  const handlesection = () => {
    setSection("1");
  };
  const handlechecksection = () => {
    setSection("2");
  };

  console.log(Getdetails);
  return (
    <div className={styles.formcontainer}>
      {section === "1" ? (
        <div>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <Box
                onSubmit={handleSubmit}
                component="form"
                noValidate
                sx={{ color: "white" }}
              >
                <FormTitle title="Enrolled Student Info" addAbout={addAbout} />

                <FormField id="email" label="Email Address" name="email" />

                <p style={{ color: "red" }}>{error}</p>

                <FlowButton buttontext="Submit" />
              </Box>
            </Container>
          </ThemeProvider>
        </div>
      ) : (
        <div>
          <FormTitle title="Enrolled Student Info" addAbout={handlesection} />
          <Studentinfo
            setsection={handlechecksection}
            getdetails={Getdetails}
            showsection={handlesection}
          />
        </div>
      )}
    </div>
  );
};

export default CheckForm;
