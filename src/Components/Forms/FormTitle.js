import styles from "../../Stylesheet/Text.module.css";
import { Button } from "@mui/material";

const FormTitle = ({ title, addAbout }) => {
  return (
    <div className={styles.formtitle}>
      <h3>{title}</h3>
      <Button
        sx={{
          marginLeft: 4,
          fontSize: 15,
          fontWeight: "bold",
          border: 1,
          color: "white",
          bgcolor: "red",
          ":hover": {
            bgcolor: "",
            color: "white",
            fontWeight: "bold",
          },
        }}
        variant="outlined"
        onClick={addAbout}
      >
        Close
      </Button>
    </div>
  );
};

export default FormTitle;
