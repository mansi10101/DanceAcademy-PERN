import React, { useState } from "react";
import EditButton from "./EditButton";
import DeleteButton from "./DeleteButton";
import styles from "../../Stylesheet/Text.module.css";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const InfoPageButtonlayout = ({
  setsection,
  getdetails,
  email,
  showsection,
}) => {
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
          <EditButton
            setsection={setsection}
            buttonname="Edit"
            emailid={email}
            getdetails={getdetails}
          />
          <DeleteButton
            buttonname="Delete"
            email={email}
            showsection={showsection}
          />
        </Stack>
      </ThemeProvider>
    </div>
  );
};

export default InfoPageButtonlayout;
