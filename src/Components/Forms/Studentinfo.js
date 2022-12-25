import React from "react";
import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InfoPageButtonlayout from "../Buttons/InfoPageButtonlayout";
import CompletePayment from "./CompletePayment";
import { handleUpCase, handleFLCase } from "../../utils/helper.js";

const Studentinfo = ({ setsection, getdetails, showsection }) => {
  const [paySuccess, setPaySuccess] = useState(0);

  const handlepaySuccess = () => {
    setPaySuccess(1);
    return !paySuccess;
  };
  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          sx={{ minWidth: 350, bgcolor: "black" }}
          aria-label="simple table"
        >
          <TableBody
            sx={{
              "& td": {
                color: "white",
              },
              "& th": {
                color: "white",
              },
            }}
          >
            <TableRow>
              <TableCell component="th" scope="row">
                First Name
              </TableCell>
              <TableCell align="right">
                {handleUpCase(getdetails.first_name)}
              </TableCell>
            </TableRow>
            <TableRow sx={{ border: "white" }}>
              <TableCell component="th" scope="row">
                Last Name
              </TableCell>
              <TableCell align="right">
                {" "}
                {handleUpCase(getdetails.last_name)}{" "}
              </TableCell>
            </TableRow>
            <TableRow sx={{ border: "white" }}>
              <TableCell component="th" scope="row">
                Email
              </TableCell>
              <TableCell align="right"> {getdetails.email} </TableCell>
            </TableRow>
            <TableRow sx={{ border: "white" }}>
              <TableCell component="th" scope="row">
                Mobile Number
              </TableCell>
              <TableCell align="right"> {getdetails.mobile} </TableCell>
            </TableRow>
            <TableRow sx={{ border: "white" }}>
              <TableCell component="th" scope="row">
                Age
              </TableCell>
              <TableCell align="right"> {getdetails.age} </TableCell>
            </TableRow>
            <TableRow sx={{ border: "white" }}>
              <TableCell component="th" scope="row">
                Gender
              </TableCell>
              <TableCell align="right">
                {" "}
                {handleFLCase(getdetails.gender)}{" "}
              </TableCell>
            </TableRow>
            <TableRow sx={{ border: "white" }}>
              <TableCell component="th" scope="row">
                Batch
              </TableCell>
              <TableCell align="right"> {getdetails.batch} </TableCell>
            </TableRow>
            <TableRow sx={{ border: "white" }}>
              <TableCell component="th" scope="row">
                Fees Status
              </TableCell>
              <TableCell align="right">
                {" "}
                {getdetails.fees || paySuccess ? (
                  "PAID"
                ) : (
                  <CompletePayment
                    text="Pay Now"
                    response={handlepaySuccess}
                    email={getdetails.email}
                  />
                )}{" "}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <InfoPageButtonlayout
        setsection={setsection}
        getdetails={getdetails}
        email={getdetails.email}
        showsection={showsection}
      />
    </div>
  );
};

export default Studentinfo;
