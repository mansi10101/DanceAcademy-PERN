import React, { useState } from "react";
import styles from "../../Stylesheet/Text.module.css";
import { Grid, Box } from "@mui/material";
import FormField from "./FormField";
import SelectField from "./SelectField";
import { Gender, Batch } from "../../utils/constants.js";
import Button from "@mui/material/Button";
import {
  validateAge,
  validateEmail,
  validatemobile,
  validateName,
} from "../../utils/helper";

const EditForm = ({ setsection, getdetails, emailid }) => {
  const [first_name, setFirst_name] = useState(getdetails.first_name);
  const [last_name, setLast_name] = useState(getdetails.last_name);
  const [email, setEmail] = useState(getdetails.email);
  const [mobile, setMobile] = useState(getdetails.mobile);
  const [age, setAge] = useState(getdetails.age);
  const [gender, setGender] = useState(getdetails.gender);
  const [batch, setBatch] = useState(getdetails.batch);
  const [error, setError] = useState("");

  const handleedit = async (e) => {
    e.preventDefault();

    if (!validateName(first_name)) {
      setError("Invalid First Name");
    } else if (!validateName(last_name)) {
      setError("Invalid Last Name");
    } else if (!validateEmail(email)) {
      setError("Invalid Email Address");
    } else if (!validatemobile(mobile)) {
      setError("Invalid Mobile Number");
    } else if (!validateAge(age)) {
      setError("This Age is not allowed");
    } else {
      try {
        const body = {
          email,
          first_name,
          last_name,
          mobile,
          age,
          gender,
          batch,
        };
        const response = await fetch(
          `http://localhost:5000/userdetails/${emailid}/edit`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );
        console.log(response);
        window.location = "/";
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  return (
    <div className={styles.formconatiner}>
      <Box
        sx={{
          display: "grid",
          gridDirection: "row",
          alignItems: "center",
          color: "white",
          width: "auto",
          height: "auto",
        }}
      >
        <Grid container direction="row" spacing={2}>
          <Grid item xs>
            <FormField
              label="First Name"
              defaultValue={getdetails.first_name}
              onChange={(e) => setFirst_name(e.target.value)}
              id="name"
              name={first_name}
            />
          </Grid>
          <Grid item xs>
            <FormField
              id="name"
              defaultValue={getdetails.last_name}
              onChange={(e) => setLast_name(e.target.value)}
              label="Last Name"
              name={last_name}
            />
          </Grid>
        </Grid>
        <FormField
          id="email"
          label="Email Address"
          defaultValue={getdetails.email}
          onChange={(e) => setEmail(e.target.value)}
          name={getdetails.email}
        />

        <FormField
          id="mobile"
          label="Mobile Number"
          defaultValue={getdetails.mobile}
          onChange={(e) => setMobile(e.target.value)}
          name={getdetails.mobile}
        />
        <Grid container direction="row">
          <Grid item sx>
            <FormField
              id="age"
              label="Age"
              defaultValue={getdetails.age}
              onChange={(e) => setAge(e.target.value)}
              name={getdetails.age}
            />
          </Grid>
          <Grid item sx>
            <Box sx={{ minWidth: 130, marginTop: 1 }}>
              <SelectField
                id="gender"
                label="Gender"
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                options={Gender}
                fullWidth
                sx={{ color: "white" }}
              />
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ minWidth: 120, marginTop: 2 }}>
          <SelectField
            fullWidth
            label="Batch"
            id="batch"
            value={batch}
            onChange={(e) => setBatch(e.target.value)}
            options={Batch}
            sx={{ color: "white" }}
          />
        </Box>

        <p style={{ color: "red" }}>{error}</p>

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
          onClick={handleedit}
          fullWidth
          variant="contained"
        >
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default EditForm;
