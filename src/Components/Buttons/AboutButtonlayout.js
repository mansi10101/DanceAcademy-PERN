import React from "react";
import styles from "../../Stylesheet/Text.module.css";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import EnChButton from "./EnChButton";

const AboutButtonlayout = ({ addEnForm, addChForm }) => {
  let theme = createTheme({
    palette: {
      primary: {
        main: "#ffffff",
      },
    },
  });

  return (
    <div className={styles.innerbuttonarea}>
      <ThemeProvider theme={theme}>
        <Stack direction="row" spacing={6}>
          <EnChButton buttonname="Enroll Now" addForm={addEnForm} />
          <EnChButton buttonname="Already Enrolled ?" addForm={addChForm} />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default AboutButtonlayout;
